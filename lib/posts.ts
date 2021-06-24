import fs from 'fs-extra'
import path from 'path'
import matter from 'gray-matter'

const {promisify} = require("util");
const globMethod = require('glob');
const glob = promisify(globMethod);

const sharp = require('sharp');

export interface IPostData {
  id: string;
  content: any;
  title: string;
  date: string;
  source?: string;
  picture: PictureFormats;
}

export interface IPictureFormat {
  src?: string,
  srcset?: string,
  source: Partial<HTMLSourceElement>[],
  width: number;
  height: number;
}

export type PictureFormats = Record<string, IPictureFormat>;

const fileExists = (s: string) => new Promise(r => fs.access(s, fs.constants.F_OK, e => r(!e)));

const mkDir = (path: string) =>
  new Promise((res, rej) => {
    fs.mkdir(path, {recursive: true}, function (err) {
      if (err) rej(err);
      res(true);
    });
  });

const postsDirectory = path.join(process.cwd(), 'posts');
const imgDirectory = path.join(process.cwd(), 'public/');
const nameStaticDirectory = 'public/static/';
const namePublicStaticDirectory = 'static/';
const pathDirectory = path.join(process.cwd(), 'public/static/path/');
const imgStaticDirectory = path.join(process.cwd(), nameStaticDirectory);

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

export async function getAllPostIdsBySection(section: string) {
  if (!section) {
    return {};
  }
  const sectionPath = `${pathDirectory}${section}.json`;
  const isPath = await fileExists(sectionPath);
  let filePathsParams = {};

  if (isPath) {
    const rawData = fs.readFileSync(sectionPath, 'utf8');
    filePathsParams = JSON.parse(rawData);
  } else {
    let filePaths = [];

    try {
      filePaths = await glob(`${postsDirectory}/${section}/*/*/*/*\.md`, {});
    } catch (e) {
      console.error(e)
    }

    filePathsParams = filePaths.map((filePath: string) => {
      const id = path.parse(filePath).base.replace(/\.md$/, '');
      return {
        params: {
          id,
          filePath
        }
      }
    });

    fs.writeFileSync(`${pathDirectory}${section}.json`, JSON.stringify(filePathsParams));
  }

  return filePathsParams;
}

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map(fileName => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, '')
//       }
//     }
//   })
// }

function removeLinkWithImg(content: string): string {
  return content.replace(/\[(!.*)\)\](.*\.jpg)/g, '$1');
}

function getImgListFromContent(content: string = ''): Array<string> {
  const matches = content.matchAll(/!\[.*?\]\((.*?\.jpg).*?\)/gim);
  return Array.from(matches, m => m[1]);
}

async function setPostPictureSourceFormats(
  image: any,
  sizes: number[],
  fileShort: string,
  dir: string,
  originWidth: number
) {
  const avifQuality = {quality: 45, speed: 1};
  return sizes.map(async (size: number) => {
    // When the original image is small
    const fixedSize = originWidth < size ? originWidth : size;
    const outputImage = `${imgStaticDirectory}${dir}${fixedSize}/${fileShort}.avif`;

    const isStaticImg = await fileExists(outputImage);
    if (!isStaticImg) {
      await mkDir(`${imgStaticDirectory}${dir}${fixedSize}`);
      await image
        .avif(avifQuality)
        .resize({width: fixedSize, fit: 'contain'})
        .toFile(outputImage);
    }

    const relativePath = outputImage.split(namePublicStaticDirectory)[1];
    return `${namePublicStaticDirectory}${relativePath} ${fixedSize}w`;
  });
}

function setContentSize(width: number, height: number, contentWidth: number) {
  if (width < contentWidth) {
    return {
      width,
      height
    }
  }
  const contentHeight = height / (width / contentWidth);
  return {
    width: contentWidth,
    height: contentHeight
  }
}

async function setPostPictureFormats(images: string[] = []): Promise<PictureFormats> {
  const sizes = [340, 660];
  const contentWidth = 660;

  const imgListFormat = images.map(async (img): Promise<Record<string, IPictureFormat>> => {
    const isOriginImg = await fileExists(imgDirectory + img);

    try {
      if (isOriginImg) {
        const fileShort = path.parse(img).name;
        const dir = img.split(`${fileShort}.jpg`)[0];

        const image = sharp(imgDirectory + img);
        const {width, height} = await image.metadata();
        const contentSizes = setContentSize(width, height, contentWidth);

        // Generate avif source
        const sourceFormats = await setPostPictureSourceFormats(image, sizes, fileShort, dir, width);
        const srcSet: string[] = await Promise.all(sourceFormats);

        return {
          [img]: {
            width: contentSizes.width,
            height: contentSizes.height,
            source: [
              {
                srcset: srcSet.join(', '),
                type: 'image/avif',
                sizes: '(min-width: 680px) 660px, calc(100vw - 40px)'
              }
            ]
          }
        }
      }
    } catch (e) {
      console.error(e)
    }

    return {
      [img]: {
        width: 0,
        height: 0,
        source: []
      }
    }
  });

  const pictureFormats: Record<string, IPictureFormat>[] = await Promise.all(imgListFormat);
  return pictureFormats.reduce((formats, picture) => ({...formats, ...picture}), {});
}

export async function getPostData(id: string) {
  let fullPath = '';
  try {
    fullPath = await glob(`${postsDirectory}/*/*/*/*/${id}\.md`, {});
  } catch (e) {
    console.error(e)
  }
  const fileContents = fs.readFileSync(fullPath[0], 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const imgList = getImgListFromContent(matterResult.content);
  const picture = await setPostPictureFormats(imgList);

  const content = removeLinkWithImg(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    content,
    picture,
    ...matterResult.data
  }
}
