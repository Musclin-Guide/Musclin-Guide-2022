import Link from 'next/link';

interface ALinkMenuItemProps {
  href: string;
  isExternal: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
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
