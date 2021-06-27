import TimeIcon from "../../public/assets/icons/time.svg";

import React from "react";
import { IPostData } from "../../lib/posts";
import Time from "../time";
import PostLink from "../post/post-link";

export interface IProps {
  post: IPostData;
}

export default function PostsItem({title, date, content, uri}: IPostData) {
  return <article className={'post-preview'}>
    <PostLink className={'post-preview__img'} href={uri}>
      <img width={260} height={195}
           src="/img/2014/01/08/22-00/ubuntu14-04-wallpaper-by-mrubuntux-d70iae2-11841092374-o.jpg"
           alt=""/>
    </PostLink>
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
