import React, { useState } from 'react';
import { HomeIcon } from './icons/Home';
import { CollectionIcon } from './icons/Collection';
import { ChatIcon } from './icons/Chat';
import { Link, NavLink, useLocation } from 'remix';
import { Track } from '~/lib/loadTrack';
import { MusicIcon } from './icons/Music';

type Props = {
  track: Track | null;
};

export const Sidebar: React.FC<Props> = ({ track }) => {
  const location = useLocation();
  const [trackOpen, setTrackOpen] = useState(false);

  return (
    <aside className="fixed right-0 left-0 bottom-0 md:bottom-auto md:right-auto md:h-screen w-full md:w-64 bg-gray-800 py-2 md:py-0 z-50">
      {/* Logo */}
      <div className="w-24 h-24 hidden md:flex items-center justify-center relative mx-auto mt-20">
        <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 absolute inset-0 transform -rotate-3 z-10" />
        <h3 className="text-xl md:text-5xl text-gray-800 font-black z-20">
          JT
        </h3>
      </div>

      <nav className="text-gray-200 font-medium md:mt-8 relative z-20">
        <ul className="mx-4 space-x-2 md:space-x-0 md:space-y-2 flex flex-row md:flex-col justify-start md:justify-center relative">
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

          <li className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2">
            <button
              className="block bg-indigo-500 bg-opacity-20 text-indigo-500 rounded-full p-2"
              onClick={() => setTrackOpen((p) => !p)}
            >
              <MusicIcon className="block h-5 w-5 opacity-75 -mr-[2px] -mb-[2px]" />
            </button>
          </li>
        </ul>
      </nav>

      {track ? (
        <div
          className={`absolute bottom-full md:bottom-0 w-full ${
            trackOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <Link
            className="group block w-full bg-gray-700 hover:bg-gray-600 transition-colors p-2 text-right md:text-left"
            to="/music"
          >
            <p className="whitespace-nowrap truncate text-xs font-semibold text-gray-300 text-opacity-50 mb-2 uppercase tracking-wider">
              Listening Now
            </p>

            <div className="flex flex-row-reverse md:flex-row items-center justify-start">
              <img
                src={track.album_art}
                alt={track.album_name}
                className="w-12 h-12 ml-2 md:ml-0 mr-0 md:mr-2"
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

            <div className="md:hidden absolute top-full right-6 border-12 border-transparent border-t-gray-700 group-hover:border-t-gray-600 transition-colors"></div>
          </Link>
        </div>
      ) : null}
    </aside>
  );
};
