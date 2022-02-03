/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  browserBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'api/_build',
};

// const { remarkMdxFrontmatter } = require('remark-mdx-frontmatter');

// can be an sync / async function or an object
module.exports.mdx = async (filename) => {
  const [remarkGfm] = await Promise.all([
    import('remark-gfm').then((mod) => mod.default),
  ]);

  return {
    remarkPlugins: [remarkGfm],
  };
};
