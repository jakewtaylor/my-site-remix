import { Link } from 'remix';
import {
  differenceInMinutes,
  format,
  formatDistanceToNow,
  parseISO,
} from 'date-fns';
import { Post } from '~/lib/getBlogs';

type Props = {
  blogs: Post[];
};

export const BlogList: React.FC<Props> = ({ blogs }) => (
  <ul className="text-gray-100">
    {blogs.map((blog) => {
      const created = parseISO(blog.created);
      const updated = parseISO(blog.updated);

      // If there was an update within the first 5 minutes, don't worry about mentioning it!
      const different = Math.abs(differenceInMinutes(created, updated)) > 5;

      return (
        <li key={blog.slug} className="border-b-2 border-b-gray-700 pb-5 mb-5">
          <Link to={`/blog/${blog.slug}`}>
            <h1 className="text-4xl text-gray-200 font-black mb-2">
              {blog.title}
            </h1>
          </Link>
          <p className="text-lg mb-2">
            {blog.excerpt}
            <br />
            <Link to={`/blog/${blog.slug}`} className="text-indigo-200">
              Read More
            </Link>
          </p>

          <div className="flex flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              Posted{' '}
              <span
                title={format(created, 'do MMMM yyyy, HH:mm')}
                className="underline decoration-dotted"
              >
                {formatDistanceToNow(created, { addSuffix: true })}
              </span>
              {different ? (
                <>
                  , updated{' '}
                  <span
                    title={format(updated, 'do MMMM yyyy, HH:mm')}
                    className="underline decoration-dotted"
                  >
                    {formatDistanceToNow(updated, { addSuffix: true })}
                  </span>
                  .
                </>
              ) : (
                '.'
              )}
            </p>

            {blog.tags.length > 0 ? (
              <ul className="flex flex-row flex-wrap gap-2 justify-end">
                {blog.tags.map((tag) => (
                  <li key={tag}>
                    <Link
                      to={`/blog/tagged/${tag}`}
                      className="bg-gradient-to-br from-fuchsia-400 via-fuchsia-500 to-fuchsia-600 px-2 py-1 block leading-none rounded-full text-xs whitespace-nowrap"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      );
    })}
  </ul>
);
