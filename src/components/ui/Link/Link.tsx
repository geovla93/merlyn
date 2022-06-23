import { FC, PropsWithChildren } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = NextLinkProps & {
  className?: string;
};

const Link: FC<PropsWithChildren<LinkProps>> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
