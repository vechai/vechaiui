import { cx, IconButton } from "@vechaiui/react";
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { mainNavigation, Navigation } from "@components/navigation";
import {
  NavigationContext,
  NavigationContextType,
} from "@components/navigation-provider";
import components from "@components/components";

export default function Layout({ children }: { children: React.ReactElement }) {
  const router = useRouter();

  let classes = "w-full h-full";
  const isMainNavigation = !!mainNavigation.find(
    (nav) => nav.path === router.pathname
  );
  // if (router.pathname === "/") classes = "";
  if (isMainNavigation)
    classes =
      "max-w-full px-4 pl-4 md:px-20 md:pl-20 xl:pl-40 py-12 mx-auto prose dark:prose-dark text-gray-500";
  else if (
    components[0].components.find(
      (component) => `/${component.key}` === router.pathname
    )
  )
    classes = "w-full h-full";

  if (router.pathname === "/gallery") return children;

  return (
    <div className="flex flex-col h-screen overflow-hidden lg:flex-row bg-neutral-900 dark:bg-fill">
      <Header />
      <Navigation />
      <div className="relative left-0 flex-1 p-0 overflow-auto lg:py-6 lg:pr-6 xl:overflow-hidden">
        <div
          className={cx(
            "h-full rounded-none bg-base lg:rounded max-w-screen-2xl",
            isMainNavigation && "overflow-auto"
          )}
        >
          <div className={cx(classes, "overflow-auto")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const { setOpen } = React.useContext(
    NavigationContext
  ) as NavigationContextType;
  return (
    <nav className="w-full lg:hidden">
      <div className="flex items-center w-full px-4 dark h-14">
        <IconButton variant="ghost" onClick={() => setOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </IconButton>
        <div className="flex items-center justify-end flex-1">
          <Link href="/getting-started" passHref>
            <a className="relative inline-flex items-center justify-center flex-shrink-0 w-8 h-8 align-top rounded-base bg-neutral-800">
              <img
                className="object-cover w-full h-full rounded-base"
                src="/vechai.svg"
                alt="logo"
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
