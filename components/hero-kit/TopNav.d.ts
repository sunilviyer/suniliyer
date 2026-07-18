import type * as React from 'react';

export interface TopNavLink {
  href: string;
  label: string;
  desc?: string;
  external?: boolean;
  onClick?: () => void;
}

export interface TopNavMenuGroup {
  heading: string;
  links: TopNavLink[];
}

declare const TopNav: React.ComponentType<{
  menuGroups?: TopNavMenuGroup[];
  onConnectSubmit?: (fd: FormData) => Promise<void> | void;
}>;

export default TopNav;
