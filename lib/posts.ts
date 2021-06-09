import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import remark from 'remark'
// import html from 'remark-html'

const {promisify} = require("util");
const globMethod = require('glob');
const glob = promisify(globMethod);

export interface IPostData {
  id: string;
  contentHtml: any;
  title: string;
  date: string;
  source?: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() { // section = '/news'
  /*  // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory + section)
    const allPostsData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
        id,
        ...matterResult.data
      }
    })
    // Sort posts by date
    // @ts-ignore
    return allPostsData.sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1
      } else if (a > b) {
        return -1
      } else {
        return 0
      }
    })*/

  return {};
}

export async function getAllPostIdsBySection(section: string = 'news') {
  let filePaths = [];

  try {
    filePaths = await glob(`${postsDirectory}/${section}/*/*/*/*\.md`, {});
  } catch (e) {
    console.error(e)
  }

  return filePaths.map((filePath: string) => {
    const id = path.parse(filePath).base.replace(/\.md$/, '');
    return {
      params: {
        id,
        filePath
      }
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string) {
  let fullPath = '';
  try {
    fullPath = await glob(`${postsDirectory}/*/*/*/*/${id}\.md`, {});
  } catch (e) {
    console.error(e)
  }
  fullPath = fullPath[0];

  // const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

/*  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();*/

  const contentHtml = matterResult.content;

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
