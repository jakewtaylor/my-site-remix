import React from 'react';
import { Link } from 'remix';
import type { Track } from '~/lib/loadTrack';

type Props = {
  /**
   * Controls if the currently playing dialog has been expanded on _mobile_
   * On desktop, We always show the dialog, in which case this is ignored, using some tailwind.
   */
  open: boolean;
  track: Track;
};

export const CurrentTrack: React.FC<Props> = ({ track, open }) => {
  return (
    <div
      className={`absolute bottom-full md:bottom-0 w-full ${
        open ? 'block' : 'hidden md:block'
      }`}
    >
      <Link
        className="group block w-full bg-gray-700 hover:bg-gray-600 transition-colors p-2 text-right md:text-left"
        to="/music"
      >
        <p className="whitespace-nowrap truncate text-xs font-semibold text-gray-300 text-opacity-80 mb-2 uppercase tracking-wider">
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
  );
};
