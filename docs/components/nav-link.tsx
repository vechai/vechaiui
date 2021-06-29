import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

export const NavLink = ({
  children,
  ...props
}: { children: React.ReactNode } & LinkProps) => {
  const router = useRouter();
  let isActive = false;

  if (router.pathname === props.href) {
    isActive = true;
  }

  return (
    <Link passHref {...props}>
      {typeof children === "function" ? children(isActive) : children}
    </Link>
  );
};
