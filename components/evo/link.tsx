"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

// Internal app routes navigate client-side through next/link. Static files
// under /downloads and anything off-site stay plain anchors: next/link would
// try to prefetch a route that does not exist for the former, and cannot help
// with the latter.
export function isAppRoute(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("/downloads/");
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function EvoLink({ href, children, ...rest }: Props) {
  if (isAppRoute(href)) {
    return <Link href={href} {...rest}>{children}</Link>;
  }
  return <a href={href} {...rest}>{children}</a>;
}
