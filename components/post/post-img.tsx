import React from "react";
import Source from "../source";
import { IPictureFormat } from "../../lib/posts";

export interface IProps {
  title?: string;
  picture: Record<string, IPictureFormat>;
  src: string;
  alt?: string;
}

export default function PostImg({title = '', alt = '', src, picture}: IProps) {
  const {width, height, source} = picture[src];
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
          alt={alt}
          decoding="async"
          loading="lazy"
          width={width}
          height={height}
        />

      </picture>

      {title && <figcaption><Source url={title}/></figcaption>}
    </figure>
  );
}
