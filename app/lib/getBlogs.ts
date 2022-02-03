import path from 'path';
import fs from 'fs/promises';
import parseFrontMatter from 'front-matter';
import invariant from 'tiny-invariant';
import { formatISO } from 'date-fns';

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
  draft: boolean;
};

function isValidFrontMatter(attributes: any): attributes is FrontMatter {
  return attributes?.title;
}

const frontmatterToPost = async (fileName: string): Promise<Post> => {
  const filePath = path.join(blogsPath, fileName);
  const file = await fs.readFile(filePath);
  const stats = await fs.stat(filePath);
  const { attributes } = parseFrontMatter(file.toString());

  invariant(isValidFrontMatter(attributes), `${fileName} has bad meta data!`);

  return {
    slug: fileName.replace(/\.mdx?$/, ''),
    title: attributes.title,
    excerpt: attributes.excerpt,
    created: formatISO(stats.birthtime),
    updated: formatISO(stats.mtime),
    tags: attributes.tags?.split(',').map((tag) => tag.trim()) ?? [],
    draft: attributes.draft ?? false,
  };
};

// relative to the server output not the source!
const blogsPath = path.join(__dirname, '..', '..', 'app', 'routes', 'blog');

export async function getBlogs(): Promise<Post[]> {
  const dir = await fs.readdir(blogsPath);

  const posts = await Promise.all(
    dir
      .filter((filename) => filename.endsWith('.mdx'))
      .map(async (filename) => frontmatterToPost(filename)),
  );

  return posts.filter((blog) => !blog.draft);
}
