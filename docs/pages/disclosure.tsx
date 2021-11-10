import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Disclosure",
    value: "disclosure",
    propTypes: [
      {
        extend: true,
        path: "https://headlessui.dev/react/disclosure",
        external: true,
        label: "See more `Disclosure` props.",
      },
    ],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "disclosure.tsx",
        code: `<div className="flex p-8 space-x-4">
  <div className="w-full">
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base hover:bg-neutral-100 dark:hover:bg-blackAlpha-50 focus:outline-none">
            <span>What is Lorem Ipsum?</span>
            <span
              className={cx(
                "w-5 h-5 rounded-full flex justify-center items-center text-primary-500 dark:text-primary-600",
                open
                  ? "bg-primary-50 dark:bg-primary-200 dark:bg-opacity-15"
                  : "bg-transparent"
              )}
            >
              <Icon
                as={ChevronUpIcon}
                label="chevron-up"
                className={cx("w-4 h-4", open ? "transform rotate-180" : "")}
              />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <Disclosure
      as="div"
      className="border-t border-neutral-200 dark:border-neutral-700"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base hover:bg-neutral-100 dark:hover:bg-blackAlpha-50 focus:outline-none">
            <span>Where does it come from?</span>
            <span
              className={cx(
                "w-5 h-5 rounded-full flex justify-center items-center text-primary-500 dark:text-primary-600",
                open
                  ? "bg-primary-50 dark:bg-primary-200 dark:bg-opacity-15"
                  : "bg-transparent"
              )}
            >
              <Icon
                as={ChevronUpIcon}
                icon="chevron-up"
                className={cx("w-4 h-4", open ? "transform rotate-180" : "")}
              />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "",
    files: [
      {
        name: "disclosure.tsx",
        code: `<div className="flex p-8 space-x-4">
  <div className="w-full">
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={cx(
              "flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base focus:outline-none",
              "bg-primary-50 text-primary-800 dark:bg-primary-200 dark:bg-opacity-15 dark:text-primary-200"
            )}
          >
            <span>What is Lorem Ipsum?</span>
            <Icon
              as={ChevronUpIcon}
              label="chevron-up"
              className={cx(
                "w-4 h-4",
                open ? "transform rotate-180 text-primary-500" : ""
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <Disclosure as="div" className="mt-2">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={cx(
              "flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base focus:outline-none",
              "bg-primary-50 text-primary-800 dark:bg-primary-200 dark:bg-opacity-15 dark:text-primary-200"
            )}
          >
            <span>Where does it come from?</span>
            <Icon
              as={ChevronUpIcon}
              label="chevron-up"
              className={cx(
                "w-4 h-4",
                open ? "transform rotate-180 text-primary-500" : ""
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "",
    files: [
      {
        name: "disclosure.tsx",
        code: `<div className="flex p-8 space-x-4">
  <div className="w-full">
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={cx(
              "flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base focus:outline-none bg-primary-500 text-white"
            )}
          >
            <span>What is Lorem Ipsum?</span>
            <Icon
              as={ChevronUpIcon}
              label="chevron-up"
              className={cx(
                "w-4 h-4",
                open ? "transform rotate-180 text-white" : ""
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <Disclosure as="div" className="mt-2">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={cx(
              "flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base focus:outline-none bg-primary-500 text-white"
            )}
          >
            <span>Where does it come from?</span>
            <Icon
              as={ChevronUpIcon}
              label="chevron-up"
              className={cx(
                "w-4 h-4",
                open ? "transform rotate-180 text-white" : ""
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const disclosureComponent = {
  name: "Disclosure",
  importer: `import { Disclosure } from "@headlessui/react";
import { cx } from "@vechaiui/react";`,
  demoList,
  propList,
};

export default function Disclosure() {
  return (
    <>
      <SEO
        title="Tailwind CSS Disclosure"
        description="An accordion is a vertical stack of interactive headings used to toggle the display of further information; each item can be 'collapsed', with just a short label visible, or 'expanded' to show the complete content."
      />
      <DocumentBuilder component={disclosureComponent} />
    </>
  );
}
