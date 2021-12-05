import React from 'react';
import { HomeIcon } from './icons/Home';
import { CollectionIcon } from './icons/Collection';
import { ChatIcon } from './icons/Chat';
import { Link, NavLink, useLocation } from 'remix';
import { Track } from '~/lib/loadTrack';

type Props = {
  track: Track | null;
};

export const Sidebar: React.FC<Props> = ({ track }) => {
  const location = useLocation();

  return (
    <aside className="fixed right-0 left-0 bottom-0 md:bottom-auto md:right-auto md:h-screen w-full md:w-64 bg-gray-800 py-2 md:py-0 z-50">
      <div className="p-2 md:py-0 md:px-8 flex justify-center md:static absolute bottom-full left-1/2 md:transform-none transform -translate-x-1/2 translate-y-3 rounded-lg bg-gray-800">
        {/* Logo */}
        <div className="w-8 h-8 md:w-24 md:h-24 flex items-center justify-center relative md:mt-20">
          <div className="w-8 h-8 md:w-24 md:h-24 rounded-lg bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 absolute inset-0 transform -rotate-3 z-10" />
          <h3 className="text-xl md:text-5xl text-gray-800 font-black z-20">
            JT
          </h3>
        </div>
      </div>

      <nav className="text-gray-200 font-medium md:mt-8 relative z-20">
        <ul className="mx-4 space-x-2 md:space-x-0 md:space-y-2 flex flex-row md:flex-col justify-center">
          <li>
            <NavLink
              to="/work"
              className={(active) =>
                `px-4 py-3 flex flex-col md:flex-row justify-center md:justify-start items-center rounded-lg hover:bg-gray-100 hover:bg-opacity-25 ${
                  active && location.pathname === '/work'
                    ? 'bg-indigo-500 bg-opacity-20 text-indigo-500'
                    : ''
                }`
              }
            >
              <HomeIcon className="h-5 w-5 opacity-75" />
              <span className="leading-none md:ml-4 mt-1 md:mt-0 text-gray-200">
                Home
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/work/portfolio"
              className={(active) =>
                `px-4 py-3 flex flex-col md:flex-row justify-center md:justify-start items-center rounded-lg hover:bg-gray-100 hover:bg-opacity-25 ${
                  active && location.pathname.startsWith('/work/portfolio')
                    ? 'bg-indigo-500 bg-opacity-20 text-indigo-500'
                    : ''
                }`
              }
            >
              <CollectionIcon className="h-5 w-5 opacity-75" />
              <span className="leading-none md:ml-4 mt-1 md:mt-0 text-gray-200">
                Portfolio
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/work/contact"
              className={(active) =>
                `px-4 py-3 flex flex-col md:flex-row justify-center md:justify-start items-center rounded-lg hover:bg-gray-100 hover:bg-opacity-25 ${
                  active && location.pathname.startsWith('/work/contact')
                    ? 'bg-indigo-500 bg-opacity-20 text-indigo-500'
                    : ''
                }`
              }
            >
              <ChatIcon className="h-5 w-5 opacity-75" />
              <span className="leading-none md:ml-4 mt-1 md:mt-0 text-gray-200">
                Get in touch
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {track ? (
        <>
          <Link
            className="absolute bottom-0 w-full bg-gray-700 hover:bg-gray-600 transition-colors p-2"
            to="/music"
          >
            <p className="whitespace-nowrap truncate text-xs font-semibold text-gray-300 text-opacity-50 mb-2 uppercase tracking-wider">
              Listening Now
            </p>

            <div className="flex items-center justify-start">
              <img
                src={track.album_art}
                alt={track.album_name}
                className="w-12 h-12 mr-2"
              />

              <div className="overflow-hidden">
                <p className="whitespace-nowrap truncate text-xs text-gray-300 text-opacity-90">
                  {track.track_name}
                </p>
                <p className="whitespace-nowrap truncate text-xs text-gray-300 text-opacity-75">
                  {track.artist_name}
                </p>
                <p className="whitespace-nowrap truncate text-xs text-gray-300 text-opacity-75">
                  {track.album_name}
                </p>
              </div>
            </div>
          </Link>
        </>
      ) : null}
    </aside>
  );
};
