import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";
import { tabsEndClosedTWFile } from "@utils/tw";

const propList = [
  {
    name: "Tabs",
    value: "tabs",
    propTypes: [
      {
        extend: true,
        path: "https://www.radix-ui.com/primitives/docs/components/tabs",
        external: true,
        label: "See more `Tabs` props.",
      },
    ],
  },
];

const demoList = [
  {
    name: "Tabs Line",
    files: [
      {
        name: "tabs.tsx",
        code: `function App() {
  const tabs = [
    {
      value: "tab1",
      name: "Account",
      content: "Tab one content",
      icon: UserCircleIcon,
    },
    {
      value: "tab2",
      name: "Notifications",
      content: "Tab second content",
      icon: BellIcon,
    },
    {
      value: "tab3",
      name: "Security",
      content: "Tab third content",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="flex flex-wrap w-full p-8 space-x-4">
      <Tabs.Root className="flex flex-col" defaultValue="tab1">
        <Tabs.List
          aria-label="tabs example"
          className={cx(
            "flex flex-row justify-start",
            "border-b border-neutral-300 dark:border-neutral-700"
          )}
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={cx(
                "px-4 py-2 h-10 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                "text-neutral-900 bg-transparent border-b-2 border-transparent",
                "hover:border-neutral-300",
                "selected:border-primary-500 selected:text-primary-600",
                // dark
                "dark:text-neutral-100",
                "dark:hover:border-neutral-600",
                "dark:selected:border-primary-500"
              )}
            >
              {tab.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            className="p-4 flex-grow-1"
          >
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Tabs Line With Icon",
    files: [
      {
        name: "tabs.tsx",
        code: `function App() {
  const tabs = [
    {
      value: "tab1",
      name: "Account",
      content: "Tab one content",
      icon: UserCircleIcon,
      label: "user-circle",
    },
    {
      value: "tab2",
      name: "Notifications",
      content: "Tab second content",
      icon: BellIcon,
      label: "bell",
    },
    {
      value: "tab3",
      name: "Security",
      content: "Tab third content",
      icon: ShieldCheckIcon,
      label: "shield-check",
    },
  ];

  return (
    <div className="flex flex-wrap w-full p-8 space-x-4">
      <Tabs.Root className="flex flex-col" defaultValue="tab1">
        <Tabs.List
          aria-label="tabs example"
          className={cx(
            "flex flex-row justify-start",
            "border-b border-neutral-300 dark:border-neutral-700"
          )}
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={cx(
                "flex items-center justify-center px-4 py-2 h-10 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                "text-neutral-900 bg-transparent border-b-2 border-transparent",
                "hover:border-neutral-300",
                "selected:border-primary-500",
                // dark
                "dark:text-neutral-100",
                "dark:hover:border-neutral-600",
                "dark:selected:border-primary-500"
              )}
            >
              <Icon as={tab.icon} label={tab.label} className="w-4 h-4 mr-2" />
              <span>{tab.name}</span>
              {tab.value === "tab2" && (
                <Badge className="ml-2">18</Badge>
              )}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            className="p-4 flex-grow-1"
          >
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Tabs End Closed",
    files: [
      {
        name: "tabs.tsx",
        code: `function App() {
  const tabs = [
    {
      value: "tab1",
      name: "Account",
      content: "Tab one content",
      icon: UserCircleIcon,
    },
    {
      value: "tab2",
      name: "Notifications",
      content: "Tab second content",
      icon: BellIcon,
    },
    {
      value: "tab3",
      name: "Security",
      content: "Tab third content",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="flex flex-wrap w-full p-8 space-x-4">
      <Tabs.Root className="flex flex-col" defaultValue="tab1">
        <Tabs.List
          aria-label="tabs example"
          className={cx(
            "flex flex-row justify-start",
            "border-b border-gray-200 dark:border-neutral-700"
          )}
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={cx(
                "px-4 py-2 h-10 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                "flex-shrink-0 inline-block",
                "text-neutral-600 bg-transparent border border-transparent",
                "hover:text-neutral-900",
                "selected:bg-base selected:text-neutral-900 selected:rounded-tl-md selected:rounded-tr-md",
                "selected:border-inherit selected:border-b-transparent",
                // dark
                "dark:text-neutral-400 dark:bg-transparent",
                "dark:hover:text-neutral-100",
                "dark:selected:bg-base dark:selected:text-neutral-100",
              )}
            >
              {tab.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            className="p-4 flex-grow-1"
          >
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}`,
        readOnly: false,
      },
      tabsEndClosedTWFile,
    ],
  },
  {
    name: "Tabs End Closed With Icon",
    files: [
      {
        name: "tabs.tsx",
        code: `function App() {
  const tabs = [
    {
      value: "tab1",
      name: "Account",
      content: "Tab one content",
      icon: UserCircleIcon,
      label: "user-circle",
    },
    {
      value: "tab2",
      name: "Notifications",
      content: "Tab second content",
      icon: BellIcon,
      label: "bell",
    },
    {
      value: "tab3",
      name: "Security",
      content: "Tab third content",
      icon: ShieldCheckIcon,
      label: "shield-check",
    },
  ];

  return (
    <div className="flex flex-wrap w-full p-8 space-x-4">
      <Tabs.Root className="flex flex-col" defaultValue="tab1">
        <Tabs.List
          aria-label="tabs example"
          className={cx(
            "flex flex-row justify-start",
            "border-b border-gray-200 dark:border-neutral-700"
          )}
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={cx(
                "px-4 py-2 h-10 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                "flex-shrink-0 inline-block",
                "text-neutral-600 bg-transparent border border-transparent",
                "hover:text-neutral-900",
                "selected:bg-base selected:text-neutral-900 selected:rounded-tl-md selected:rounded-tr-md",
                "selected:border-inherit selected:border-b-transparent",
                // dark
                "dark:text-neutral-400 dark:bg-transparent",
                "dark:hover:text-neutral-100",
                "dark:selected:bg-base dark:selected:text-neutral-100",
              )}
            >
              <Icon as={tab.icon} label={tab.label} className="w-4 h-4 mr-2" />
              <span>{tab.name}</span>
              {tab.value === "tab2" && (
                <Badge className="ml-2">18</Badge>
              )}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            className="p-4 flex-grow-1"
          >
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}`,
        readOnly: false,
      },
      tabsEndClosedTWFile,
    ],
  },
  {
    name: "Tabs Soft Rounded",
    files: [
      {
        name: "tabs.tsx",
        code: `function App() {
  const tabs = [
    {
      value: "tab1",
      name: "Account",
      content: "Tab one content",
      icon: UserCircleIcon,
    },
    {
      value: "tab2",
      name: "Notifications",
      content: "Tab second content",
      icon: BellIcon,
    },
    {
      value: "tab3",
      name: "Security",
      content: "Tab third content",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="flex flex-wrap w-full p-8 space-x-4">
      <Tabs.Root className="flex flex-col" defaultValue="tab1">
        <Tabs.List
          aria-label="tabs example"
          className="flex flex-row justify-start"
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={cx(
                "flex items-center justify-center",
                "px-4 py-2 h-10 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                "flex-shrink-0 inline-block rounded-md",
                "text-neutral-600 bg-transparent",
                "hover:text-neutral-900",
                "selected:text-neutral-900 selected:bg-neutral-200",
                // dark
                "dark:text-neutral-400 dark:bg-transparent",
                "dark:hover:text-neutral-100",
                "dark:selected:text-neutral-100 dark:selected:bg-neutral-700",
              )}
            >
              {tab.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            className="p-4 flex-grow-1"
          >
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}`,
        readOnly: false,
      },
    ],
  },
];

const tabsComponent = {
  name: "Tabs",
  importer: `import * as Tabs from "@radix-ui/react-tabs";
import { cx } from "@vechaiui/react";`,
  demoList,
  propList,
};

export default function Tabs() {
  return (
    <>
      <SEO
        title="Tailwind CSS Tabs"
        description="Tabbed interfaces are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space."
      />
      <DocumentBuilder component={tabsComponent} />
    </>
  );
}
