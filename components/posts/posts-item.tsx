import TimeIcon from "../../public/assets/icons/time.svg";

import React from "react";
import { IPostData } from "../../lib/posts";
import Time from "../time";
import PostLink from "../post/post-link";
import PostImg from "../post/post-img";

export interface IProps {
  post: IPostData;
}

export default function PostsItem({title, date, content, uri, src, picture}: IPostData) {
  return <article className={'post-preview'}>
    {src && <PostLink className={'post-preview__img'} href={uri}>
      <PostImg picture={picture} src={src}/>
    </PostLink>}
    <PostLink className={'post-preview__title'} href={uri}>
      <h2>{title}</h2>
    </PostLink>
    <p className={'post-preview__content'}>{content}</p>
    <footer className={'time'}>
      <TimeIcon/>
      <Time dateTime={date}/>
    </footer>
  </article>
}
