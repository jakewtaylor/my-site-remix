import { LoaderFunction, MetaFunction } from '@remix-run/server-runtime';
import { Link, useLoaderData } from 'remix';
import MusicIntro from '~/components/music/intro.mdx';
import { Album, loadAllAlbums } from '~/lib/loadAlbums';
import { cache } from '~/lib/redis.server';

type LoaderData = {
  albums: Album[];
};

export let meta: MetaFunction = () => {
  return {
    title: 'Music — Jake Taylor',
    description: 'My favourite albums.',
  };
};

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const dayInSeconds = 60 * 60 * 24;
  // const albums = await cache('albums', dayInSeconds, loadAllAlbums);
  const albums = await loadAllAlbums();

  return { albums };
};

export default function Music() {
  const { albums } = useLoaderData<LoaderData>();

  return (
    <>
      <MusicIntro />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 mt-4">
        {albums.map((album) => (
          <a key={album.link} href={album.link} target="_blank">
            <div className="mb-2 w-full aspect-w-1 aspect-h-1">
              <img src={album.image} alt={album.name} />
            </div>

            <p className="leading-none text-trueGray-200 font-semibold">
              {album.name}
            </p>
            <p className="leading-none text-trueGray-200 text-opacity-80 mt-1 italic">
              {album.artist}
            </p>
          </a>
        ))}
      </div>
    </>
  );
}
