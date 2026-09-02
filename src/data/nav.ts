// Shared navigation model. Every page links to every other via header + footer.

export interface NavLink {
  label: string;
  href: string;
}

/** Primary links shown in the header (the "Request a consultation" CTA is separate). */
export const headerLinks: NavLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'JobsOxo', href: '/jobsoxo' },
  { label: 'About', href: '/about' },
  { label: 'Trade', href: '/trade-partners' },
];

export const headerCta: NavLink = { label: 'Request a consultation', href: '/contact' };

/** Footer repeats the header links and adds Contact as a plain link. */
export const footerLinks: NavLink[] = [
  ...headerLinks,
  { label: 'Contact', href: '/contact' },
];

/** True when `href` is the page currently being rendered. */
export function isCurrent(href: string, pathname: string): boolean {
  const clean = pathname.replace(/\/$/, '') || '/';
  return clean === href;
}
