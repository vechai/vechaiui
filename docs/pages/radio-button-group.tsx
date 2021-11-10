import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const demo =
  `function App() {
  const items = [
    {
      value: "deployments",
      name: "Deployments",
    },
    {
      value: "analytics",
      name: "Analytics",
    },
    {
      value: "workflow",
      name: "Workflow",
    },
    {
      value: "settings",
      name: "Settings",
    },
  ];

  const [value, setValue] = React.useState(items[0].value);
  
  return (
    <div className="flex flex-col p-8 space-y-8">
      <RadioGroup value={value} onChange={setValue}>
        <RadioGroup.Label className="sr-only">Radius</RadioGroup.Label>
        <div className="inline-flex p-0.5 space-x-0 rounded-base bg-neutral-200 dark:bg-neutral-700">
          {items.map((item) => (
            <RadioGroup.Option
              key={item.name}
              value={item.value}
              className={({
                checked,
              }) => \`inline-flex appearance-none items-center justify-center rounded-base cursor-base
                  select-none relative whitespace-nowrap align-middle outline-none font-semibold
                  text-xs px-4 py-2
                  focus:outline-none` +
  "\n" +
  "                  ${" +
  "checked" +
  "\n" +
  '                     ? "bg-primary-500 text-white shadow"' +
  "\n" +
  '                     : "text-neutral-600 dark:text-neutral-400"' +
  "\n" +
  "                   }" +
  "\n" +
  `             \`}
            >
              {item.name}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      <RadioGroup value={value} onChange={setValue}>
        <RadioGroup.Label className="sr-only">Radius</RadioGroup.Label>
        <div className="inline-flex p-0.5 space-x-0 rounded-base bg-neutral-200 dark:bg-neutral-700">
          {items.map((item) => (
            <RadioGroup.Option
              key={item.name}
              value={item.value}
              className={({
                checked,
              }) => \`inline-flex appearance-none items-center justify-center rounded-base cursor-base
                  select-none relative whitespace-nowrap align-middle outline-none font-semibold
                  text-xs px-4 py-2
                  focus:outline-none` +
  "\n" +
  "                  ${" +
  "checked" +
  "\n" +
  '                     ? "bg-white text-neutral-900 shadow dark:bg-neutral-800 dark:text-white"' +
  "\n" +
  '                     : "text-neutral-600 dark:text-neutral-400"' +
  "\n" +
  "                   }" +
  "\n" +
  `             \`}
            >
              {item.name}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

    </div>
  );
}`;

const demo2 =
  `function App() {
  const themes = [
    {
      value: "light",
      name: "Light",
      icon: SunIcon,
      label: "sun",
    },
    {
      value: "dark",
      name: "Dark",
      icon: MoonIcon,
      label: "moon",
    },
    {
      value: "system",
      name: "System",
      icon: StarIcon,
      label: "star",
    },
  ];

  const [value, setValue] = React.useState(themes[0].value);
  
  return (
    <div className="flex flex-col p-8 space-y-8">
      <RadioGroup value={value} onChange={setValue}>
        <RadioGroup.Label className="sr-only">Radius</RadioGroup.Label>
        <div className="inline-flex p-0.5 space-x-0 rounded-base bg-neutral-200 dark:bg-neutral-700">
          {themes.map((item) => (
            <RadioGroup.Option
              key={item.name}
              value={item.value}
              className={({
                checked,
              }) => \`inline-flex appearance-none items-center justify-center rounded-base cursor-base
                  select-none relative whitespace-nowrap align-middle outline-none font-semibold
                  text-xs px-4 py-2
                  focus:outline-none` +
  "\n" +
  "                  ${" +
  "checked" +
  "\n" +
  '                     ? "bg-white text-primary-500 shadow dark:bg-neutral-800"' +
  "\n" +
  '                     : "text-neutral-600 dark:text-neutral-400"' +
  "\n" +
  "                   }" +
  "\n" +
  `             \`}
            >
              <Icon as={item.icon} label={item.label} className="w-4 h-4 mr-1" />
              <span>{item.name}</span>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}`;

const propList = [
  {
    name: "RadioGroup",
    value: "radio-group",
    propTypes: [
      {
        extend: true,
        path: "https://headlessui.dev/react/radio-group",
        external: true,
        label: "See more `RadioGroup` props.",
      },
    ],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "radio-group.tsx",
        code: demo,
        readOnly: false,
      },
    ],
  },
  {
    name: "With icon",
    files: [
      {
        name: "radio-group.tsx",
        code: demo2,
        readOnly: false,
      },
    ],
  },
];

const radioGroupComponent = {
  name: "RadioGroup",
  importer: `import { RadioGroup } from "@headlessui/react";`,
  demoList,
  propList,
};

export default function RadioGroup() {
  return (
    <>
      <SEO
        title="Tailwind CSS RadioGroup"
        description="Radio buttons allow a user to select a single option from a list of predefined options."
      />
      <DocumentBuilder component={radioGroupComponent} />
    </>
  );
}
