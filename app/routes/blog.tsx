import { Link, Outlet, useLocation } from 'remix';

export default function Blog() {
  const location = useLocation();

  const isIndex = /\/blog\/?$/.test(location.pathname);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="relative bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600">
        <div
          className={`max-w-prose w-11/12 mx-auto transition-all ${
            isIndex ? 'pt-36 pb-12' : 'py-4'
          } relative z-30`}
        >
          {isIndex ? (
            <Link to="/" className="text-sm text-gray-100 mb-1">
              ← Back to main site
            </Link>
          ) : null}

          <Link to="/blog">
            <h1
              className={`text-gray-100 transition ${
                isIndex ? 'text-6xl' : 'text-4xl'
              } font-black`}
            >
              Jake's Blog
            </h1>
          </Link>

          {isIndex ? (
            <p className="mt-4 text-lg font-semibold text-gray-100">
              My thoughts on whatever I fancy writing about. Probably updated
              very infrequently.
            </p>
          ) : null}
        </div>
      </div>

      <div className="pb-8">
        <Outlet />
      </div>
    </div>
  );
}
