import Link from 'next/link';
import { useCallback } from "react";

export interface IProps {
  children: React.ReactChild
  href: string;
}

export default function PostLink({children, href}: IProps) {
  const extendLink = href.match(/http|\\\\/g);

  const fixedLocalLink = useCallback((link: string) => link.startsWith('/') ? link : `/${link}`, [href]);

  return !extendLink ? (
    <Link href={`${(fixedLocalLink(href))}`}>
      <a>
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
