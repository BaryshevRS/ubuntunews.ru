// const fs = require('fs-extra');
// const path = require('path');
// const {promisify} = require("util");
// const globMethod = require('glob');
// const glob = promisify(globMethod);
//
// const publicDir = path.join(process.cwd(), 'public/');
// const postsDirectory = path.join(process.cwd(), 'posts');
//
// const config = {
//   host: 'https://ubuntunews.ru',
//   sections: ['news', 'apps', 'articles']
// };
//
// function setUrl(url, changefreq) {
//   return `<url><loc>${url}</loc><changefreq>${changefreq}</changefreq></url>`;
// }
//
// async function generateSiteMap(config) {
//   try {
//     const postsPaths = await glob(`${postsDirectory}/+(${config.sections.join('|')})/*/*/*/*\.md`, {});
//
//     const allPostsData = postsPaths.map(async (postPath) => {
//       const section = postPath.split(`${postsDirectory}/`)[1].split('/')[0];
//       const id = path.parse(postPath).name;
//       const url = `/${section}/${id}`;
//
//       return {
//         url
//       }
//     });
//
//     const postsData = await Promise.all(allPostsData);
//
//     const siteMap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     ${setUrl(config.host, 'always')}
//     ${setUrl(`${config.host}/ubuntu`, 'weekly')}
//     ${setUrl(`${config.host}/ubuntu/download`, 'weekly')}
//     ${postsData.map(({url}) => {
//       return `${setUrl(`${config.host}${url}`, 'weekly')}`;
//     }).join("\n")}
// </urlset>`;
//
//     fs.writeFileSync(`${publicDir}/sitemap.xml`, siteMap);
//   } catch (e) {
//     console.error(e);
//   }
// }
//
// (async () => {
//   await generateSiteMap(config);
// })();
