import { Transition } from "@headlessui/react";
import {
  ViewGridIcon,
  BeakerIcon,
  ColorSwatchIcon
} from "@heroicons/react/outline";
import { Button, Icon, cx } from "@vechaiui/react";
import * as React from "react";

import { Github, Twitter } from "@libs/react-feather";

import { NavLink } from "./nav-link";
import {
  NavigationContext,
  NavigationContextType
} from "./navigation-provider";
import { ThemSwitcher } from "./theme-switcher";
import components from "./components";

export const mainNavigation = [
  {
    icon: ViewGridIcon,
    title: "Getting Started",
    path: "/"
  },
  {
    icon: ViewGridIcon,
    title: "Getting Started",
    path: "/getting-started",
    hidden: true
  },
  {
    icon: BeakerIcon,
    title: "Theming",
    path: "/theming"
  },
  {
    icon: null,
    title: "Themes Gallery",
    path: "/themes-gallery",
    hidden: true
  },
  {
    icon: ColorSwatchIcon,
    title: "Color Mode",
    path: "/color-mode"
  }
];

export function Navigation() {
  const { open, slideMode, setOpen, navRef } = React.useContext(
    NavigationContext
  ) as NavigationContextType;

  return (
    <nav ref={navRef}>
      <Transition.Root show={open} as={React.Fragment}>
        <div
          className={cx(
            "fixed inset-y-0 left-0 z-30 w-64 px-3 py-5 lg:block text-neutral-400 bg-neutral-900 lg:static h-full"
          )}
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative h-full">
            {slideMode && (
              <div className="absolute top-0 right-0 flex pt-0 pl-2 -mr-8 sm:-mr-10 sm:pl-4">
                <button
                  className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div className="flex flex-col h-full overflow-hidden">
              <div className="space-y-4">
                <ThemSwitcher />
                <div className="grid grid-cols-2 gap-2 dark">
                  <a
                    href="https://github.com/vechai/vechaiui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full"
                      // variant="solid"
                      // @ts-ignore
                      leftIcon={<Github size={16} className="mr-2" />}
                    >
                      Github
                    </Button>
                  </a>
                  <a
                    href="https://twitter.com/vechaiui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full"
                      // @ts-ignore
                      leftIcon={<Twitter size={16} className="mr-2" />}
                      variant="solid"
                      color="blue"
                    >
                      Twitter
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex flex-col flex-1 px-2 py-4 overflow-auto">
                <div className="mb-6 space-y-1">
                  {mainNavigation.map((link, idx) => {
                    if (link.hidden) return null;

                    return (
                      <NavLink key={idx} passHref href={link.path}>
                        {(active: boolean) => (
                          <a
                            className={cx(
                              "relative flex items-center w-full px-2 py-1.5 transition-colors duration-150 ease-in-out font-medium bg-transparent border-0 rounded cursor-base text-sm",
                              active
                                ? cx(
                                    "bg-primary-200 text-primary-200",
                                    "bg-opacity-15"
                                  )
                                : "hover:text-white"
                            )}
                            onClick={() => slideMode && setOpen(false)}
                          >
                            <Icon
                              as={link.icon || undefined}
                              label=""
                              className="w-5 h-5 mr-2 text-primary-500"
                            />
                            <span>{link.title}</span>
                          </a>
                        )}
                      </NavLink>
                    );
                  })}
                </div>

                {components.map((comp, idx) => (
                  <div className="mb-3" key={idx}>
                    <p className="px-2 mb-2 text-xs font-semibold tracking-wide text-white uppercase">
                      {comp.heading}
                    </p>
                    <div className="flex flex-col space-y-0">
                      {comp.components.map(c => (
                        <NavLink key={c.key} href={`/${c.key}`} passHref>
                          {(active: boolean) => (
                            <a
                              className={cx(
                                "relative flex items-center w-full px-2 py-1 bg-transparent border-0 rounded cursor-base text-sm",
                                active ? "text-primary-500" : "hover:text-white"
                              )}
                              onClick={() => slideMode && setOpen(false)}
                            >
                              <span>{c.title}</span>
                            </a>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Transition.Root>
    </nav>
  );
}
