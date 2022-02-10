import { Link } from 'remix';

import vwlCoverPhoto from '~/images/portfolio/vwl-cover.png';
import purismCoverPhoto from '~/images/portfolio/purism-cover.png';

export default function Portfolio() {
  return (
    <>
      <p className="text-xl text-gray-300 mt-6">
        Below is some of my work, please look around.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <Link
          to="/work/portfolio/vwl"
          className="bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 rounded-lg overflow-hidden transition-transform md:transform md:hover:scale-105"
        >
          <img src={vwlCoverPhoto} />

          <div className="px-4 pb-2">
            <h6 className="text-gray-200 font-bold text-xl">
              Veterinary Wound Library
            </h6>
          </div>
        </Link>

        <Link
          to="/work/portfolio/purism"
          className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-400 rounded-lg overflow-hidden transition-transform md:transform md:hover:scale-105"
        >
          <img src={purismCoverPhoto} />

          <div className="px-4 pb-2">
            <h6 className="text-gray-200 font-bold text-xl">Purism</h6>
          </div>
        </Link>

        <Link
          to="/work/contact"
          className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-lg overflow-hidden p-8 transition-transform md:transform md:hover:scale-105"
        >
          <h6 className="text-gray-800 font-bold text-2xl leading-6">
            Maybe your site should be here?
          </h6>
          <p className="leading-4 text-gray-700 mt-4">
            Get in touch, let's build something together.
          </p>
        </Link>
      </div>
    </>
  );
}
