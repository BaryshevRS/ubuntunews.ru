const {getUnixTime, parseISO} = require("date-fns");
const {format} = require("date-fns-tz");

const matter = require("gray-matter");
const remark = require("remark");
const strip = require("strip-markdown");

const fs = require("fs-extra");
const path = require("path");
const {promisify} = require("util");
const globMethod = require("glob");
const glob = promisify(globMethod);

const publicDir = path.join(process.cwd(), 'public/');
const postsDirectory = path.join(process.cwd(), 'posts');

const config = {
  host: 'https://ubuntunews.ru',
  title: 'Новости Ubuntu',
  description: 'Новости и статьи об Ubuntu Linux',
  sections: ['news', 'apps', 'articles'],
  feedSize: 10
};

function setUrl(url, changefreq) {
  return `<url><loc>${url}</loc><changefreq>${changefreq}</changefreq></url>`;
}

async function getPreviewContent(content) {
  const firstParagraph = content.split(/\r\n|\n/g)[0];
  return await new Promise((resolve, reject) => {
    return remark()
      .use(strip)
      .process(firstParagraph, function (err, file) {
        if (err) reject();
        resolve(String(file));
      });
  });
}

function setItem(guid, url, title, description, date) {
  return `<item>
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${date}</pubDate>
      <title>${title}</title>
      <description>${description}</description>
      <link>${config.host}${url}</link>
    </item>`;
}

async function generateSiteMap(config) {
  try {
    const postsPaths = await glob(`${postsDirectory}/+(${config.sections.join('|')})/*/*/*/*\.md`, {});

    const allPostsData = postsPaths.map(async (postPath) => {
      const section = postPath.split(`${postsDirectory}/`)[1].split('/')[0];
      const id = path.parse(postPath).name;
      const fileContents = fs.readFileSync(postPath, 'utf8');
      const matterResult = matter(fileContents);
      const {data, content} = matterResult;
      const url = `/${section}/${id}`;
      const timestamp = getUnixTime(parseISO(data.date));
      const date = `${format(
        parseISO(data.date),
        `EEE, dd MMM yyyy HH:mm:ss xx`,
        {timeZone: 'Europe/Moscow'}
      )
      }`;

      return {
        url,
        content,
        timestamp,
        date,
        title: data.title
      }
    });

    let postsData = await Promise.all(allPostsData);
    postsData = postsData.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1));

    let pagePosts = postsData.slice(0, config.feedSize);
    pagePosts = pagePosts.map(async ({url, timestamp, content, date, title}) => {
      const description = await getPreviewContent(content);
      return `${setItem(timestamp, url, title, description, date)}`;
    });
    const posts = await Promise.all(pagePosts);

    const lastBuildDate = `${format(
      new Date(),
      `EEE, dd MMM yyyy HH:mm:ss xx`,
      {timeZone: 'Europe/Moscow'}
    )
    }`;

    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <title>${config.title}</title>
    <description>${config.description}</description>
    <link>${config.host}</link>
    ${posts.join("\n")}
  </channel>
</rss>`;

    fs.writeFileSync(`${publicDir}/feed.xml`, feed);
  } catch (e) {
    console.error(e);
  }
}

(async () => {
  await generateSiteMap(config);
})();
