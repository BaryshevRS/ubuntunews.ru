import Link from 'next/link';
import { useMemo } from "react";
import { Element } from "react-markdown/src/ast-to-react";
import { useRouter } from "next/router";

export interface IProps {
  children: React.ReactChild
  href: string;
  node?: Element;
  className?: string;
  activeClassName?: string;
  activeMatch?: boolean;
  onClick?: () => void
  title?: string;
}

export default function PostLink(
  {
    children,
    href,
    node,
    className,
    activeMatch,
    activeClassName,
    onClick,
    title
  }: IProps) {
  const router = useRouter();

  const [externalLink, url] = useMemo(() => {
    let url = href;
    const host = process.env.NEXT_PUBLIC_HOST || '';

    // External link check
    let externalLink = !!url.match(/http|\\\\/g);
    if (host && url.match(host)) {
      externalLink = false;
    }

    // Added support for apt links
    const nodeHref = node?.properties?.href?.toString();
    if (nodeHref && nodeHref.match(/^apt/g)) {
      url = nodeHref;
      externalLink = true;
    }

    // Added slash for local links
    if (!url.startsWith('/') && !externalLink && !url.match(host)) {
      url = `/${url}`;
    }

    return [externalLink, url];
  }, [href, node]);

  const classNames = useMemo(() => {
    const classNames = [];
    if (className) {
      classNames.push(className)
    }

    if (activeMatch) {
      const match = RegExp(`^${url}`);
      if (router.asPath.match(match)) {
        classNames.push(activeClassName || 'active')
      }
    }

    return classNames;
  }, [activeMatch, activeClassName, className]);

  return !externalLink ? (
    <Link href={url}>
      <a title={title} onClick={onClick} className={classNames.join(' ')}>{children}</a>
    </Link>
  ) : (
    <a
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className={classNames.join(' ')}
      onClick={onClick}
    >{children}</a>
  );
}
