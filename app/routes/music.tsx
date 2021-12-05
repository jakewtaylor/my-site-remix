import { LoaderFunction } from '@remix-run/server-runtime';
import { useLoaderData, Outlet } from 'remix';
import { loadTrack, Track } from '~/lib/loadTrack';

type LoaderData = {
  track: Track | null;
};

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  return {
    track: await loadTrack(),
  };
};

export default function Music() {
  const { track } = useLoaderData<LoaderData>();

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="relative bg-red-100">
        <div className="max-w-6xl w-11/12 mx-auto pt-36 pb-12 relative z-30">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-gray-100 text-6xl font-black">Music</h1>

            {track ? (
              <div className="bg-gray-900 bg-opacity-25 flex flex-row items-center justify-end min-w-64">
                <div className="p-2">
                  <p className="block text-xs font-semibold text-gray-300 text-opacity-75 uppercase text-right">
                    Listening Now
                  </p>

                  <div className="text-right mt-2">
                    <p className="whitespace-nowrap truncate text-xs text-gray-200 leading-none">
                      {track.track_name}
                    </p>
                    <p className="whitespace-nowrap truncate text-xs text-gray-200 text-opacity-80 leading-none my-1">
                      {track.artist_name}
                    </p>
                    <p className="whitespace-nowrap truncate text-xs text-gray-200 text-opacity-80 leading-none">
                      {track.album_name}
                    </p>
                  </div>
                </div>

                <img
                  src={track.album_art}
                  alt={track.album_name}
                  className="w-20 h-20 m-1 ml-0"
                />
              </div>
            ) : null}
          </div>
        </div>

        {track ? (
          <>
            <div
              style={{ backgroundImage: `url(${track.album_art})` }}
              className="absolute inset-0 bg-no-repeat bg-cover bg-center z-10"
            >
              <div className="absolute inset-0 backdrop-blur-lg" />
            </div>

            <div className="absolute inset-0 z-20 bg-gradient-to-t from-gray-900 to-transparent opacity-75" />
          </>
        ) : null}
      </div>

      <main className="max-w-6xl w-11/12 mx-auto py-8">
        <Outlet />
      </main>
    </div>
  );
}
