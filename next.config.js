const path = require("path");
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/generation/sitemap');
      require('./lib/generation/feed');
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      include: [
        path.resolve(__dirname, "components"),
        path.resolve(__dirname, "public"),
      ],
      use: [
        'next-swc-loader',
        {
          loader: '@svgr/webpack',
          options: { babel: false }
        }
      ],
    });

    return config;
  },
  exportPathMap: async function (
    defaultPathMap, { dev, dir, outDir, distDir, buildId }
  ) {
    const main = {'/': { page: '/' }};
    const ubuntuPage = {
      '/ubuntu': { page: '/ubuntu'},
      '/ubuntu/download': { page: '/ubuntu/download'}
    };
    const projectPage = {
      '/project': { page: '/project'},
      '/project/partners': { page: '/project/partners'},
      '/project/form': { page: '/project/form'},
      '/project/message-received': { page: '/project/message-received'}
    };
    const error404Page = {
      '/404': { page: '/404'}
    };

    return {...main, ...ubuntuPage, ...projectPage, ...error404Page};
  },
  env: {
    BASE_URL: 'http://localhost:3000', // https://ubuntunews.ru'
  }
};
