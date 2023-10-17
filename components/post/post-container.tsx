import PostLink from "./post-link";
import PostImg from "./post-img";
import TimeIcon from "../../public/assets/icons/time.svg";
import Time from "../time";
import ReactMarkdown, { Components } from "react-markdown";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeRaw from "rehype-raw";
import Source from "../source";
// import { PostNav } from "../post-nav";
import React, { useMemo } from "react";
import { IPostData } from "../../lib/posts";
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';

export default function PostContainer({title, date, content, source, picture}: IPostData) {
  const components: Components = useMemo<Components>(() => ({
    a({children, href, node}: any) {
      return <PostLink href={href} node={node}>{children}</PostLink>
    },
    img({node, title, ...props}: any) {
      return <PostImg picture={picture} title={title} {...props}/>;
    },
    iframe({node, ...props}: any) {
      return <span className={'video'}>
        <iframe loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen {...props} />
      </span>;
    },
    button({children}: any) {
      return <span className={'post__btn'}>
        {children}
      </span>;
    }
  }), [picture]);

  return <article className={'post'}>
    <header>
      <h1>{title}</h1>
      <div className={'time'}>
        <TimeIcon/>
        <Time dateTime={date}/>
      </div>
    </header>
    <LightGallery
      speed={500}
      selector={'img'}>
      <ReactMarkdown remarkPlugins={[remarkUnwrapImages]}
                     rehypePlugins={[rehypeRaw]}
                     components={components}>{content}</ReactMarkdown>
    </LightGallery>
    {source && <Source url={source}/>}
  </article>
}
