import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "ContextMenu",
    value: "context-menu",
    propTypes: [
      {
        extend: true,
        path:
          "https://www.radix-ui.com/primitives/docs/components/context-menu",
        external: true,
        label: "See more `ContextMenu` props.",
      },
    ],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "context-menu.tsx",
        code: `<div>
  <ContextMenu.Root>
    <ContextMenu.Trigger>
      <div className="flex items-center justify-center p-16 bg-gray-100 dark:bg-neutral-800">
        Right click anywhere
      </div>
    </ContextMenu.Trigger>
    <ContextMenu.Content
      className={cx(
        "z-40 w-56 min-w-max py-1 rounded-md shadow-sm outline-none",
        "bg-white border border-gray-200",
        "dark:bg-neutral-800 dark:border-gray-700"
      )}
      alignOffset={-5}
    >
      <ContextMenu.Item
        className={cx(
          "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
          "focus:bg-neutral-100",
          "dark:focus:bg-neutral-700"
        )}
      >
        <Icon as={ArrowsExpandIcon} label="arrows-expand" className="w-4 h-4 mr-2" />
        <span className="flex-1 mr-2">Fullscreen</span>
        <Kbd>⌘F</Kbd>
      </ContextMenu.Item>
      <ContextMenu.Item
        className={cx(
          "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
          "focus:bg-neutral-100 dark:focus:bg-neutral-700"
        )}
      >
        <Icon as={DuplicateIcon} label="duplicate" className="w-4 h-4 mr-2" />
        <span className="flex-1 mr-2">Copy</span>
        <Kbd>⌘⇧C</Kbd>
      </ContextMenu.Item>
      <ContextMenu.Item
        className={cx(
          "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
          "focus:bg-neutral-100 dark:focus:bg-neutral-700"
        )}
      >
        <Icon as={ShareIcon} label="share" className="w-4 h-4 mr-2" />
        <span className="flex-1 mr-2">Share</span>
      </ContextMenu.Item>
      <ContextMenu.Separator className="h-px my-1 bg-neutral-200 dark:bg-neutral-700" />
      <ContextMenu.Item
        className={cx(
          "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
          "focus:bg-neutral-100 dark:focus:bg-neutral-700"
        )}
      >
        <Icon as={CalendarIcon} label="calendar" className="w-4 h-4 mr-2" />
        <span className="flex-1 mr-2">Due Date</span>
        <Kbd>⌘D</Kbd>
      </ContextMenu.Item>

      <ContextMenu.Root>
        <ContextMenu.TriggerItem
          className={cx(
            "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
            "focus:bg-neutral-100 dark:focus:bg-neutral-700"
          )}
        >
          <Icon as={TagIcon} label="tag" className="w-4 h-4 mr-2" />
          <span className="flex-1 mr-2">Labels</span>
          <Icon as={ChevronRightIcon} label="chevron-right" className="w-3 h-3 ml-2" />
        </ContextMenu.TriggerItem>
        <ContextMenu.Content
          className={cx(
            "z-40 w-48 min-w-max py-1 rounded-md shadow-sm outline-none",
            "bg-white border border-gray-200",
            "dark:bg-neutral-800 dark:border-gray-700"
          )}
          sideOffset={5}
          alignOffset={-5}
        >
          <ContextMenu.Item
            className={cx(
              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
              "focus:bg-neutral-100 dark:focus:bg-neutral-700"
            )}
          >
            <span className="w-2 h-2 mr-4 bg-red-500 rounded-full" />
            Bug
          </ContextMenu.Item>
          <ContextMenu.Item
            className={cx(
              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
              "focus:bg-neutral-100 dark:focus:bg-neutral-700"
            )}
          >
            <span className="w-2 h-2 mr-4 bg-purple-500 rounded-full" />
            Feature
          </ContextMenu.Item>
          <ContextMenu.Item
            className={cx(
              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
              "focus:bg-neutral-100 dark:focus:bg-neutral-700"
            )}
          >
            <span className="w-2 h-2 mr-4 bg-blue-500 rounded-full" />
            Improvement
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
      <ContextMenu.Item
        className={cx(
          "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
          "focus:bg-neutral-100 dark:focus:bg-neutral-700"
        )}
      >
        <Icon as={HashtagIcon} label="hastag" className="w-4 h-4 mr-2" />
        <span className="flex-1 mr-2">Unsubscribe</span>
        <Kbd>⌘⇧U</Kbd>
      </ContextMenu.Item>
    </ContextMenu.Content>
  </ContextMenu.Root>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const contextComponent = {
  name: "ContextMenu",
  importer: `import * as ContextMenu from "@radix-ui/react-context-menu";
import { cx } from "@vechaiui/react";`,
  demoList,
  propList,
};

export default function ContextMenu() {
  return (
    <>
      <SEO
        title="Tailwind CSS ContextMenu"
        description="Displays a menu located at the pointer, triggered by a right-click or a long-press."
      />
      <DocumentBuilder component={contextComponent} />
    </>
  );
}
