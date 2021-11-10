import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Popover",
    value: "popover",
    propTypes: [
      {
        extend: true,
        path: "https://www.radix-ui.com/primitives/docs/components/popover",
        external: true,
        label: "See more `Popover` props.",
      },
    ],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "popover.tsx",
        code: `<div className="p-8">
  <Popover.Root>
    <Popover.Trigger as={Button} variant="solid">Click me</Popover.Trigger>
    <Popover.Content sideOffset={5} className="px-3 py-2 text-sm font-normal leading-4 break-words bg-white border rounded-md shadow-sm border-neutral-200 text-neutral-900 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100">
      <div>Please confirm deletion</div>
      <div className="flex justify-end mt-2 space-x-2">
        <Button size="xs">No</Button>
        <Button size="xs" variant="solid" color="red">
          Yes
        </Button>
      </div>
    </Popover.Content>
  </Popover.Root>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const popoverComponent = {
  name: "Popover",
  importer: `import * as Popover from "@radix-ui/react-popover";`,
  demoList,
  propList,
};

export default function Popover() {
  return (
    <>
      <SEO
        title="Tailwind CSS Popover"
        description="A means of displaying a description or extra information about an element, usually on hover, but can also be on click or tap."
      />
      <DocumentBuilder component={popoverComponent} />
    </>
  );
}
