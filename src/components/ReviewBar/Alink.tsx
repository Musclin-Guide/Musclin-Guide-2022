import Link from 'next/link';

interface ALinkProps {
  href: string;
  isExternal: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const ALink = ({ href, isExternal, ...restProps }: ALinkProps) => (
  <Link
    href={href}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    target={isExternal ? '_blank' : undefined}
    {...restProps}
  />
);
