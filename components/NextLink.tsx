import Link from 'next/link';
import { useCallback } from "react";

export interface IProps {
  children: React.ReactChild
  href: string;
}

export default function NextLink({children, href}: IProps) {
  console.log('href', href);
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
