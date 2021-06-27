import Link from 'next/link';
import { useCallback } from "react";
import { Element } from "react-markdown/src/ast-to-react";

export interface IProps {
  children: React.ReactChild
  href: string;
  node?: Element;
  className?: string;
}

export default function PostLink({children, href, node, className}: IProps) {
  let extendLink = !!href.match(/http|\\\\/g);

  // Added support for apt links
  const nodeHref = node?.properties?.href?.toString();
  if (nodeHref && nodeHref.match(/^apt/g)) {
    href = nodeHref;
    extendLink = true;
  }

  const fixedLocalLink = useCallback((link: string) => link.startsWith('/') ? link : `/${link}`, [href]);

  return !extendLink ? (
    <Link href={`${(fixedLocalLink(href))}`}>
      <a className={className} >
        {children}
      </a>
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
