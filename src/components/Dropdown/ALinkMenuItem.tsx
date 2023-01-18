import Link from 'next/link';
import { UrlObject } from 'url';

interface ALinkMenuItemProps {
  href: string;
  isExternal: boolean;
  [key: string]: unknown;
}

export const ALinkMenuItem = ({
  href,
  isExternal,
  ...restProps
}: ALinkMenuItemProps) => (
  <Link
    href={href}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    target={isExternal ? '_blank' : undefined}
    {...restProps}
  />
);
