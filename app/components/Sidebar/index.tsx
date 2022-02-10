import React, { useState } from 'react';
import { HomeIcon } from '../icons/Home';
import { CollectionIcon } from '../icons/Collection';
import { ChatIcon } from '../icons/Chat';
import { Link, NavLink, useLocation } from 'remix';
import { Track } from '~/lib/loadTrack';
import { MusicIcon } from '../icons/Music';
import { CurrentTrack } from './CurrentTrack';

type Props = {
  track: Track | null;
};

export const Sidebar: React.FC<Props> = ({ track }) => {
  const location = useLocation();
  const [trackOpen, setTrackOpen] = useState(false);

  const pathIs = (path: string) => location.pathname.startsWith(path);

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
                  active && pathIs('/work/portfolio')
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
                  active && pathIs('/work/contact')
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

          {track ? (
            <li className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2">
              <button
                className="block bg-indigo-500 bg-opacity-20 hover:bg-opacity-30 text-indigo-500 rounded-full p-2"
                onClick={() => setTrackOpen((p) => !p)}
              >
                <MusicIcon className="block h-5 w-5 opacity-75 -mr-[2px] -mb-[2px] motion-safe:animate-pulse" />
              </button>
            </li>
          ) : null}
        </ul>
      </nav>

      {track ? <CurrentTrack open={trackOpen} track={track} /> : null}
    </aside>
  );
};
