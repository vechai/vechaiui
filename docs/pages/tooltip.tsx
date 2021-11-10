import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Tooltip",
    value: "tooltip",
    propTypes: [
      {
        extend: true,
        path: "https://www.radix-ui.com/primitives/docs/components/tooltip",
        external: true,
        label: "See more `Tooltip` props.",
      },
    ],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "tooltip.tsx",
        code: `<div className="flex flex-wrap w-full p-12 space-x-4">
  <Tooltip.Root delayDuration={0}>
    <Tooltip.Trigger>
      <Button>Hover Me</Button>
    </Tooltip.Trigger>
    <Tooltip.Content
      sideOffset={5}
      className={cx(
        "px-2 py-1.5 text-sm leading-4 font-normal shadow-sm rounded-md pointer-events-none break-words",
        "border border-neutral-200 bg-white text-neutral-900",
        "dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-100"
      )}
    >
      I'm tooltip
    </Tooltip.Content>
  </Tooltip.Root>

  <Tooltip.Root delayDuration={0}>
    <Tooltip.Trigger>
      <Button>Hover Me</Button>
    </Tooltip.Trigger>
    <Tooltip.Content
      sideOffset={5}
      className={cx(
        "px-2 py-1.5 text-sm leading-4 font-normal shadow-sm rounded-md pointer-events-none break-words",
        "border bg-neutral-700 border-neutral-600 text-neutral-100"
      )}
    >
      I'm dark tooltip
    </Tooltip.Content>
  </Tooltip.Root>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const tooltipComponent = {
  name: "Tooltip",
  importer: `import * as Tooltip from "@radix-ui/react-tooltip";
import { cx } from "@vechaiui/react";`,
  demoList,
  propList,
};

export default function Tooltip() {
  return (
    <>
      <SEO
        title="Tailwind CSS Tooltip"
        description="A means of displaying a description or extra information about an element, usually on hover, but can also be on click or tap."
      />
      <DocumentBuilder component={tooltipComponent} />
    </>
  );
}
