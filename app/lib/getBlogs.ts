import * as firstPost from '../routes/blog/first-post.mdx';

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  created: string;
  updated: string;
  tags: string[];
  draft: boolean;
};

export type FrontMatter = {
  title: string;
  excerpt: string;
  tags: string;
  draft?: boolean;
  created: string;
  updated: string;
};

const postFromModule = ({
  filename,
  attributes,
}: {
  filename: string;
  attributes: FrontMatter;
}): Post => {
  return {
    slug: filename.replace(/\.mdx?$/, ''),
    title: attributes.title,
    excerpt: attributes.excerpt,
    created: attributes.created,
    updated: attributes.updated,
    tags: attributes.tags?.split(',').map((tag) => tag.trim()) ?? [],
    draft: attributes.draft ?? false,
  };
};

export async function getBlogs(): Promise<Post[]> {
  const posts = [firstPost].map((post) => postFromModule(post));

  return posts.filter((blog) => !blog.draft);
}
