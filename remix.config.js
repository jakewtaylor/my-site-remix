const { createRoutesFromFolders } = require('@remix-run/v1-route-convention');

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: './public/build',
  publicPath: '/build/',
  serverBuildPath: 'api/index.js',
  serverModuleFormat: 'cjs',
  serverMainFields: ['main', 'module'],
  serverPlatform: 'node',
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_routeConvention: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_headers: true,
  },

  routes(defineRoutes) {
    return createRoutesFromFolders(defineRoutes);
  },
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
