import { IPostData } from "../lib/posts";
import PostLink from "./post/post-link";
import React from "react";
import PostImg from "./post/post-img";

interface IProps {
    children?: React.ReactNode;
    topPosts: IPostData[];
}

export const TopPosts: React.FC<IProps> = ({topPosts}) => {
    return (
      <section className={'top-posts'}>
        <h4>Популярное</h4>

        <ul className={'top-posts__list'}>
          {topPosts.map(({id, title, src, uri, picture}: IPostData) => (
              <li className={'top-posts__item'} key={id}>

                <PostLink className={'top-posts__link'} href={uri}>{title}</PostLink>

                {src && <PostLink className={'top-posts__img'} href={uri}>
                  <PostImg picture={picture} src={src}/>
                </PostLink>}
              </li>
            )
          )}
        </ul>
      </section>
    )
};
