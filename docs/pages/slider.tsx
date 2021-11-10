import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Slider",
    value: "slider",
    propTypes: [
      {
        extend: true,
        path: "https://www.radix-ui.com/primitives/docs/components/slider",
        external: true,
        label: "See more `Slider` props.",
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
        code: `<div className="flex flex-col w-full p-12 space-y-8">
  <Slider.Root
    defaultValue={[50]}
    className="relative flex items-center h-4 select-none"
  >
    <Slider.Track className="relative w-full h-1 bg-neutral-200 dark:bg-whiteAlpha-300 flex-grow-1">
      <Slider.Range className="absolute h-full rounded-full bg-primary-500 dark:bg-primary-200" />
    </Slider.Track>
    <Slider.Thumb className="block w-5 h-5 bg-white border rounded-full border-neutral-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
  </Slider.Root>

  <Slider.Root
    defaultValue={[25, 75]}
    className="relative flex items-center h-4 select-none"
  >
    <Slider.Track className="relative w-full h-1 bg-neutral-200 dark:bg-whiteAlpha-300 flex-grow-1">
      <Slider.Range className="absolute h-full rounded-full bg-primary-500 dark:bg-primary-200" />
    </Slider.Track>
    <Slider.Thumb className="block w-5 h-5 bg-white border rounded-full border-neutral-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
    <Slider.Thumb className="block w-5 h-5 bg-white border rounded-full border-neutral-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
  </Slider.Root>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const sliderComponent = {
  name: "Slider",
  importer: `import * as Slider from "@radix-ui/react-slider";`,
  demoList,
  propList,
};

export default function Slider() {
  return (
    <>
      <SEO
        title="Tailwind CSS Slider"
        description="A form control for choosing a value within a preset range of values."
      />
      <DocumentBuilder component={sliderComponent} />
    </>
  );
}
