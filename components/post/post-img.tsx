import React from "react";
import Source from "../source";

export interface IProps {
  title: string;
  props: Record<string, string>
}

export default function PostImg({title, props}: IProps) {
  return (
    <figure>
      <img alt="" loading="lazy" {...props} />
      {title && <figcaption><Source url={title}/></figcaption>}
    </figure>
  );
}
