// import { getAllPostIdsBySection } from "./lib/posts";

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // const news = await getAllPostIdsBySection('news');
    // const pages = {};
    // Object.keys(news.params).map(({id}) => {
    //   pages['/news/'+id] = { page: '/news' }
    // })
    //
    // console.error('news', news)

  //   [{
  //     params: {
  //       id: 'privatnost-v-ubuntu-touch',
  //         filePath: '/home/rock/Hack/ubuntunews.ru/posts/articles/2013/12/21/privatnost-v-ubuntu-touch.md'
  //     }
  //   }
  // ]

    const main = {'/': { page: '/' }};

    return {...main}
    // return {
    //   '/': { page: '/' },
    //   // '/about': { page: '/about' }
    // }
  },
  env: {
    BASE_URL: 'http://localhost:3000'
  }
};
