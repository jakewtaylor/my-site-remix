import { createClient } from 'redis';
import { config } from 'dotenv';

type RedisClientType = ReturnType<typeof createClient>;

config();

declare global {
  // This prevents us from making multiple connections to the db when the
  // require cache is cleared.
  var client: RedisClientType;
}

let client = global.client;

if (!client) {
  client = global.client = createClient({
    url: process.env.REDIS_URL,
  });
}

(async () => {
  if (!client.isOpen) {
    client.on('error', (err) => {
      console.log('Redis client error', err);
    });

    await client.connect();
  }
})();

export const cache = async <T>(
  key: string,
  ttl: number,
  create: () => Promise<T>,
) => {
  const val = await client.get(key);

  if (val) return JSON.parse(val) as T;

  const newVal = await create();

  await client.set(key, JSON.stringify(newVal), {
    EX: ttl,
  });

  return newVal;
};
