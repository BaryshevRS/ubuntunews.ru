import fs from 'fs-extra'
import path from 'path'
import matter from 'gray-matter'
import { getUnixTime, parseISO} from 'date-fns'
import remark from "remark";
import strip from "strip-markdown";

const {promisify} = require("util");
const globMethod = require('glob');
const glob = promisify(globMethod);

const sharp = require('sharp');

export interface ILayoutProps {
  title: string;
  children: React.ReactNode;
  topPosts?: IPostData[];
}

export interface IPostsData {
  totalCount: number;
  posts: IPostData[];
  pageCount: number;
  currentPage: number;
}

export interface IPostData {
  id: string;
  content: any;
  title: string;
  date: string;
  source?: string;
  uri: string;
  src: string;
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

const imgStaticDirectory = path.join(process.cwd(), nameStaticDirectory);
const postsOnPage = 6;

function getPageCount(totalCount: number, postsOnPage: number): number {
  return Math.ceil(totalCount / postsOnPage);
}

async function getPreviewContent(content: string) {
  const firstParagraph = content.split(/\r\n|\n/g)[0];
  return await new Promise((resolve, reject) => {
    return remark()
      .use(strip)
      .process(firstParagraph, function(err, file) {
        if (err) reject();
        resolve(String(file));
      });
  });
}

export async function getSortedPostsData(
  sections: string[] = [],
  currentPage: number = 0
): Promise<IPostsData | undefined> {
  let postsData: any[] = [];

  try {
    const postsPaths = await glob(`${postsDirectory}/+(${sections.join('|')})/*/*/*/*\.md`, {});

    const allPostsData = postsPaths.map(async (postPath: string) => {
      // console.log(paths);
      const id = path.parse(postPath).name;
      const fileContents = fs.readFileSync(postPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult: any = matter(fileContents);
      const {data, content} = matterResult;
      var timestamp = getUnixTime(parseISO(data.date));
      const section = postPath.split(`${postsDirectory}/`)[1].split('/')[0];
      const uri = `/${section}/${id}`;

      // Combine the data with the id and contentHtml
      return {
        id,
        content,
        timestamp,
        uri,
        date: data.date,
        title: data.title
      }
    });

    postsData = await Promise.all(allPostsData);
    postsData = postsData.sort((a: any, b: any) => (a.timestamp > b.timestamp ? -1 : 1))

    const totalCount = postsData.length;
    const pageCount = getPageCount(totalCount, postsOnPage);
    let pagePosts = postsData.slice(currentPage * postsOnPage, currentPage * postsOnPage + postsOnPage);

    pagePosts = pagePosts.map( async (post) => {
      const {content} = post;
      const previewContent = await getPreviewContent(content);

      const sizes = [260, 660];
      const maxWidth = 260;
      const sourceSizes = '(min-width: 620px) 260px, calc(100vw - 20px)';

      let picture = null;
      let src = '';
      const imgList = getImgListFromContent(content);
      if (imgList[0]) {
        src = imgList[0];
        picture = await createPictureFormats([src], maxWidth, sizes, sourceSizes);
      }

      return {...post, content: previewContent, picture, src };
    });

    const posts = await Promise.all(pagePosts);

    return {
      totalCount,
      posts,
      pageCount,
      currentPage
    };
  } catch (e) {
    console.error(e)
  }
}

export async function getTopPostsData(
  post: string[] = []
): Promise<IPostData[] | undefined> {
  let postsData: any[] = [];

  try {
    const postsPaths = await glob(`${postsDirectory}/*/*/*/*/+(${post.join('|')})\.md`, {});

    const allPostsData = postsPaths.map(async (postPath: string) => {
      // console.log(paths);
      const id = path.parse(postPath).name;
      const fileContents = fs.readFileSync(postPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult: any = matter(fileContents);
      const {data, content} = matterResult;
      var timestamp = getUnixTime(parseISO(data.date));
      const section = postPath.split(`${postsDirectory}/`)[1].split('/')[0];
      const uri = `/${section}/${id}`;

      // Combine the data with the id and contentHtml
      return {
        id,
        content,
        timestamp,
        uri,
        date: data.date,
        title: data.title
      }
    });

    postsData = await Promise.all(allPostsData);
    postsData = postsData.sort((a: any, b: any) => (a.timestamp > b.timestamp ? -1 : 1))

    const pagePosts = postsData.map( async (post) => {
      const {content} = post;

      const sizes = [80];
      const maxWidth = 80;
      const sourceSizes = '80px';

      let picture = null;
      let src = '';
      const imgList = getImgListFromContent(content);
      if (imgList[0]) {
         src = imgList[0];
         picture = await createPictureFormats([src], maxWidth, sizes, sourceSizes);
      }

      return {...post, picture, src };
    });

    return await Promise.all(pagePosts);
  } catch (e) {
    console.error(e)
  }
}

export async function getPaginationIdsBySections(sections: string[]) {
  try {
    const postsPaths = await glob(`${postsDirectory}/+(${sections.join('|')})/*/*/*/*\.md`, {});
    const totalCount = postsPaths.length;
    const pageCount = getPageCount(totalCount, postsOnPage);

    const params = [];
    for (var page = 0; page <= pageCount; page++) {
      params.push({
        params: {
          page: page.toString()
        }
      });
    }

    return params;
  } catch (e) {
    console.error(e);
  }
}

export async function getAllPostIdsBySection(section: string) {
  if (!section) {
    return {};
  }
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
        id
      }
    }
  });
}

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
  const contentHeight = Math.ceil(height / (width / contentWidth));
  return {
    width: contentWidth,
    height: contentHeight
  }
}

async function createPictureFormats(images: string[] = [], maxWidth: number, sizes: number[], sourceSizes: string) {
  const imgListFormat = images.map(async (img): Promise<Record<string, IPictureFormat>> => {
    const isOriginImg = await fileExists(imgDirectory + img);

    try {
      if (isOriginImg) {
        const fileShort = path.parse(img).name;
        const dir = img.split(`${fileShort}.jpg`)[0];

        const image = sharp(imgDirectory + img);
        const {width, height} = await image.metadata();
        const contentSizes = setContentSize(width, height, maxWidth);

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
                sizes: sourceSizes
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

async function setPostPictureFormats(images: string[] = []): Promise<PictureFormats> {
  const sizes = [340, 660];
  const maxWidth = 660;
  const sourceSizes = '(min-width: 680px) 660px, calc(100vw - 20px)';

  return createPictureFormats(images, maxWidth, sizes, sourceSizes);
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

export async function getLayoutProps() {
  const topPosts = await getTopPostsData(
    [
      'dajdzhest-novostej-ubuntu-8',
      'tweak-after-installing-ubuntu-11-10',
      '20-alternativ-rabochemu-stolu-unity',
      'top-5-bit-torrent-clients-ubuntu',
      'best-native-games-ubuntu'
    ]
  );
  return {
    topPosts
  }
}
