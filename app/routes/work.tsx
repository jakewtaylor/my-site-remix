import { useLoaderData, LoaderFunction, Outlet } from 'remix';
import { Sidebar } from '~/components/Sidebar';
import { loadTrack, Track } from '~/lib/loadTrack';

type LoaderData = {
  track: Track | null;
};

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  return {
    track: await loadTrack(),
  };
};

export default function Work() {
  const { track } = useLoaderData<LoaderData>();

  return (
    <>
      <Sidebar track={track} />

      <div className="md:ml-64 bg-gray-900 min-h-screen">
        <main className="max-w-4xl w-11/12 mx-auto pt-16 pb-4">
          <Outlet />
        </main>
      </div>
    </>
  );
}
