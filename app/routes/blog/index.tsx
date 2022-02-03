import { LoaderFunction, MetaFunction, useLoaderData } from 'remix';
import { getBlogs, Post } from '~/lib/getBlogs';
import { BlogList } from '~/components/blogs/List';

type LoaderData = {
  blogs: Post[];
};

export const meta: MetaFunction = () => {
  return {
    title: 'Blog — Jake Taylor',
    description: 'My thoughts on anything that comes to mind.',
  };
};

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const blogs = await getBlogs();

  return { blogs };
};

export default function Blog() {
  const { blogs } = useLoaderData<LoaderData>();

  return (
    <main className="max-w-prose w-11/12 mx-auto py-8">
      <BlogList blogs={blogs} />;
    </main>
  );
}
