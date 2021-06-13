import { IPostData, getPostData, getAllPostIdsBySection } from '../../lib/posts'
import TimeIcon from "../../public/assets/icons/time.svg";
import { Layout } from "../../components/layout/layout";
import { PostNav } from "../../components/post-nav";
import Time from "../../components/time";
import Source from "../../components/source";
import React from 'react';
import ReactMarkdown from 'react-markdown'
import PostLink from "../../components/post/post-link";
import rehypeRaw from 'rehype-raw'

interface IProps {
  postData: IPostData
}

export default function Post({postData}: IProps) {
  const components = {
    a({children, href}: any) {
      return <PostLink children={children} href={href}/>
    },
    iframe({node, ...props}: any) {
      return <span className={'video'}>
        <iframe frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen {...props} />
      </span>;
    }
  }
  return <Layout title={postData.title}>
    <article className={'post'}>
      <header>
        <h1>{postData.title}</h1>

        <div className={'time'}>
          <TimeIcon/>
          <Time dateTime={postData.date}/>
        </div>
      </header>

      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={postData.content} components={components}/>

      {postData.source && <Source url={postData.source}/>}
    </article>

    <PostNav/>
  </Layout>
}

export async function getStaticPaths() {
  const paths = await getAllPostIdsBySection();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  // Get external data from the file system, API, DB, etc.
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}
