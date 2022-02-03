import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { BlogList } from '~/components/blogs/List';
import { getBlogs, Post } from '~/lib/getBlogs';

type LoaderData = {
  tag: string;
  blogs: Post[];
};

export const loader: LoaderFunction = async ({
  params,
}): Promise<LoaderData> => {
  invariant(params.tag, 'Expected a tag.');
  const tag = params.tag;

  const blogs = await getBlogs();

  return {
    tag,
    blogs: blogs.filter((blog) => blog.tags.includes(tag)),
  };
};

export default function TaggedBlogPosts() {
  const { tag, blogs } = useLoaderData<LoaderData>();

  return (
    <>
      <main className="max-w-prose w-11/12 mx-auto py-8 relative">
        <div className="border-b-2 border-b-gray-700 mb-5 pb-4 text-right">
          <h2 className="text-gray-100 font-black text-xl leading-none">
            Tagged
          </h2>
          <h1 className="inline-block bg-gradient-to-br from-fuchsia-400 via-fuchsia-500 to-fuchsia-600 text-transparent text-6xl font-black leading-none bg-clip-text pb-1">
            {tag}
          </h1>
        </div>

        <BlogList blogs={blogs} />
      </main>
    </>
  );
}
