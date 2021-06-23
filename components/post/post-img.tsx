import React from "react";
import Source from "../source";
import { IPictureFormat } from "../../lib/posts";

export interface IProps {
  title: string;
  picture: Record<string, IPictureFormat>;
  props: Record<string, string>
}

export default function PostImg({title, props, picture}: IProps) {
  const {width, height, source} = picture[props.src];

  return (
    <figure>
      <picture>
        {
          source.map(({type, sizes, srcset}) => (
            <source
              key={type}
              srcSet={srcset}
              sizes={sizes}
              type={type} />
          ))
        }
        <img
          alt=""
          decoding="async"
          loading="lazy"
          width={width}
          height={height}
          {...props} />

      </picture>

      {title && <figcaption><Source url={title}/></figcaption>}
    </figure>
  );
}
