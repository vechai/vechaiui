import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Menu",
    value: "menu",
    propTypes: [
      {
        extend: true,
        path: 'https://headlessui.dev/react/menu',
        external: true,
        label: "See more `Menu` props."
      }
    ],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "menu.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Menu as="div" className="relative inline-block">
    <Menu.Button as={Button} variant="solid" color="primary">
      Profile
    </Menu.Button>
    <Transition
      as={React.Fragment}
      enter="transition ease-in-out duration-150"
      enterFrom="transform opacity-0 scale-90"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-out duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-90"
    >
      <Menu.Items
        className={cx(
          "absolute left-0 z-dropdown w-56 min-w-max mt-2 origin-top-left rounded-md shadow-sm outline-none",
          "bg-white border border-gray-200",
          "dark:bg-neutral-800 dark:border-gray-700"
        )}
      >
        <div className="px-1 py-1">
          <div role="group">
            <div className="mx-3 my-2 text-sm font-semibold">Profile</div>
            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-neutral-100 dark:bg-neutral-700",
                    disabled &&
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  My Account
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-neutral-100 dark:bg-neutral-700",
                    disabled &&
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  Payments
                </button>
              )}
            </Menu.Item>
          </div>
          <Divider
            orientation="horizontal"
            className="border-neutral-200 dark:border-neutral-700"
          />
          <div role="group">
            <div className="mx-3 my-2 text-sm font-semibold">Help</div>
            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-neutral-100 dark:bg-neutral-700",
                    disabled &&
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  Docs
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-neutral-100 dark:bg-neutral-700",
                    disabled &&
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  FAQ
                </button>
              )}
            </Menu.Item>
          </div>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Basic solid item",
    files: [
      {
        name: "menu.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Menu as="div" className="relative inline-block">
    <Menu.Button as={Button} variant="light" color="primary">
      Profile
    </Menu.Button>
    <Transition
      as={React.Fragment}
      enter="transition ease-in-out duration-150"
      enterFrom="transform opacity-0 scale-90"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-out duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-90"
    >
      <Menu.Items
        className={cx(
          "absolute left-0 z-dropdown w-56 min-w-max mt-2 origin-top-left rounded-md shadow-sm outline-none",
          "bg-white border border-gray-200",
          "dark:bg-neutral-800 dark:border-gray-700"
        )}
      >
        <div className="px-1 py-1">
          <div role="group">
            <div className="mx-3 my-2 text-sm font-semibold">Profile</div>
            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-primary-500 text-white",
                    disabled &&
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  My Account
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-primary-500 text-white",
                    disabled &&
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  Payments
                </button>
              )}
            </Menu.Item>
          </div>
          <Divider
            orientation="horizontal"
            className="border-neutral-200 dark:border-neutral-700"
          />
          <div role="group">
            <div className="mx-3 my-2 text-sm font-semibold">Help</div>
            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-primary-500 text-white",
                    disabled &&
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  Docs
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-primary-500 text-white",
                    disabled &&
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  FAQ
                </button>
              )}
            </Menu.Item>
          </div>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "With icon",
    files: [
      {
        name: "menu.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Menu as="div" className="relative inline-block">
    <Menu.Button as={Button} variant="solid">
      Actions
    </Menu.Button>
    <Transition
      as={React.Fragment}
      enter="transition ease-in-out duration-150"
      enterFrom="transform opacity-0 scale-90"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-out duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-90"
    >
      <Menu.Items
        className={cx(
          "absolute left-0 z-dropdown w-56 min-w-max mt-2 origin-top-left rounded-md shadow-sm outline-none",
          "bg-white border border-gray-200",
          "dark:bg-neutral-800 dark:border-gray-700"
        )}
      >
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active, disabled }) => (
              <button
                disabled={disabled}
                aria-disabled={disabled}
                className={cx(
                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                  active && "bg-neutral-100 dark:bg-neutral-700",
                  disabled &&
                  "disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                <Icon
                  as={ArrowsExpandIcon}
                  label="arrows-expand"
                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}
                />
                <span className="flex-1 mr-2">Fullscreen</span>
                <Kbd>⌘F</Kbd>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active, disabled }) => (
              <button
                disabled={disabled}
                aria-disabled={disabled}
                className={cx(
                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                  active && "bg-neutral-100 dark:bg-neutral-700",
                  disabled &&
                  "disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                <Icon
                  as={DuplicateIcon}
                  label="duplicate"
                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}
                />
                <span className="flex-1 mr-2">Copy</span>
                <Kbd>⌘⇧C</Kbd>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active, disabled }) => (
              <button
                disabled={disabled}
                aria-disabled={disabled}
                className={cx(
                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                  active && "bg-neutral-100 dark:bg-neutral-700",
                  disabled &&
                  "disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                <Icon
                  as={ShareIcon}
                  label="share"
                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}
                />
                <span className="flex-1">Share</span>
              </button>
            )}
          </Menu.Item>
          <Divider
            orientation="horizontal"
            className="border-neutral-200 dark:border-neutral-700"
          />
          <Menu.Item>
            {({ active, disabled }) => (
              <button
                disabled={disabled}
                aria-disabled={disabled}
                className={cx(
                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                  active && "bg-neutral-100 dark:bg-neutral-700",
                  disabled &&
                  "disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                <Icon
                  as={CalendarIcon}
                  label="calendar"
                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}
                />
                <span className="flex-1 mr-2">Due Date</span>
                <Kbd>⌘D</Kbd>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active, disabled }) => (
              <button
                disabled={disabled}
                aria-disabled={disabled}
                className={cx(
                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                  active && "bg-neutral-100 dark:bg-neutral-700",
                  disabled &&
                  "disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                <Icon
                  as={TagIcon}
                  label="tag"
                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}
                />
                <span className="flex-1">Priority</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active, disabled }) => (
              <button
                disabled={disabled}
                aria-disabled={disabled}
                className={cx(
                  "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                  active && "bg-neutral-100 dark:bg-neutral-700",
                  disabled &&
                  "disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                <Icon
                  as={HashtagIcon}
                  label="hastag"
                  className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}
                />
                <span className="flex-1 mr-2">Unsubscribe</span>
                <Kbd>⌘⇧U</Kbd>
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true
  },
];

const menuComponent = {
  name: "Menu",
  importer: `import { Menu, Transition } from "@headlessui/react";
import { cx } from "@vechaiui/react";`,
  demoList,
  propList,
};

export default function Menu() {
  return (
    <>
      <SEO title="Tailwind CSS Menu" description="A menu in which options are hidden by default, but can be shown by interacting with a button." />
      <DocumentBuilder component={menuComponent} />
    </>
  );
}