import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Listbox",
    value: "listbox",
    propTypes: [
      {
        extend: true,
        path: 'https://headlessui.dev/react/listbox',
        external: true,
        label: "See more `Listbox` props."
      }
    ],
  },
];

const demoList = [
  {
    name: "Basic Usage",
    files: [
      {
        name: "listbox.tsx",
        code: `function App() {
  const people = [
    "Wade Cooper",
    "Arlene Mccoy",
    "Devon Webb",
    "Tom Cook",
    "Tanya Fox",
  ];

  const [selectedPerson, setSelectedPerson] = React.useState(people[0]);

  return (
    <div className="p-8">
      <Listbox
        value={selectedPerson}
        onChange={setSelectedPerson}
        as="div"
        className="relative space-y-1"
      >
        {({ open }) => (
          <>
            <Listbox.Button
              className={cx(
                "relative w-full min-w-0 inline-flex items-center appearance-none focus:outline-none",
                "h-9 px-3 py-0 text-sm rounded-base pr-6 cursor-base",
                "border shadow-sm border-neutral-200",
                "text-neutral-900 bg-white",
                "hover:border-neutral-300",
                "focus:ring-1 focus:ring-primary-500 focus:border-primary-500",
                "dark:border-neutral-700",
                "dark:text-neutral-100 dark:bg-base",
                "dark:hover:border-neutral-600",
                "dark:focus:border-primary-500"
              )}
            >
              {!selectedPerson && (
                <span className="text-sm text-gray-400 truncate">
                  Choose an item
                </span>
              )}
              <span className="text-sm truncate">{selectedPerson}</span>
              <span className="absolute flex items-center ml-3 pointer-events-none right-1">
                <Icon
                  as={SelectorIcon}
                  className={cx(
                    "w-4 h-4",
                    open ? "text-primary-500" : "text-gray-400"
                  )}
                  label="selector"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-in-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-out duration-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className={cx(
                  "absolute left-0 z-40 max-h-64 w-full mt-2 origin-top-left rounded-base shadow-sm outline-none overflow-auto",
                  "bg-white border border-gray-200",
                  "dark:bg-neutral-800 dark:border-gray-700",
                  "py-1.5 px-1.5"
                )}
              >
                {people.map((person) => (
                  <Listbox.Option
                    className="relative"
                    key={person}
                    value={person}
                  >
                    {({ active, selected, disabled }) => (
                      <button
                        disabled={disabled}
                        aria-disabled={disabled}
                        className={cx(
                          "flex items-center w-full px-3 h-9 border-0 flex-shrink-0 text-sm text-left cursor-base font-normal focus:outline-none rounded-base",
                          active && "bg-neutral-100 dark:bg-neutral-700",
                        )}
                      >
                        <span
                          className={cx(
                            "flex-1 block truncate",
                            selected ? "font-semibold" : "font-normal"
                          )}
                        >
                          {person}
                        </span>
                        {selected && (
                          <span
                            className="absolute h-6 rounded-full -left-1 bg-primary-500"
                            style={{ width: 2 }}
                          ></span>
                        )}
                      </button>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  );
}`,
        readOnly: false,
      },
    ],
  },
  {
    name: "With Icon",
    files: [
      {
        name: "listbox.tsx",
        code: `function App() {
  const people = [
    "Wade Cooper",
    "Arlene Mccoy",
    "Devon Webb",
    "Tom Cook",
    "Tanya Fox",
  ];

  const [selectedPerson, setSelectedPerson] = React.useState(people[0]);

  return (
    <div className="p-8">
      <Listbox
        value={selectedPerson}
        onChange={setSelectedPerson}
        as="div"
        className="relative space-y-1"
      >
        {({ open }) => (
          <>
            <Listbox.Button
              className={cx(
                "relative w-full min-w-0 inline-flex items-center appearance-none focus:outline-none",
                "h-9 px-3 py-0 text-sm rounded-base pr-6 cursor-base",
                "border shadow-sm border-neutral-200",
                "text-neutral-900 bg-white",
                "hover:border-neutral-300",
                "focus:ring-1 focus:ring-primary-500 focus:border-primary-500",
                "dark:border-neutral-700",
                "dark:text-neutral-100 dark:bg-base",
                "dark:hover:border-neutral-600",
                "dark:focus:border-primary-500"
              )}
            >
              {!selectedPerson && (
                <span className="text-sm text-gray-400 truncate">
                  Choose an item
                </span>
              )}
              <span className="text-sm truncate">{selectedPerson}</span>
              <span className="absolute flex items-center ml-3 pointer-events-none right-1">
                <Icon
                  as={SelectorIcon}
                  className={cx(
                    "w-4 h-4",
                    open ? "text-primary-500" : "text-gray-400"
                  )}
                  label="selector"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-in-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-out duration-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className={cx(
                  "absolute left-0 z-40 max-h-64 w-full mt-2 origin-top-left rounded-base shadow-sm outline-none overflow-auto",
                  "bg-white border border-gray-200",
                  "dark:bg-neutral-800 dark:border-gray-700",
                  "py-1.5 px-1.5 space-y-1"
                )}
              >
                {people.map((person) => (
                  <Listbox.Option
                    className="relative"
                    key={person}
                    value={person}
                  >
                    {({ active, selected, disabled }) => (
                      <button
                        disabled={disabled}
                        aria-disabled={disabled}
                        className={cx(
                          "flex items-center w-full px-4 pl-10 h-9 border-0 flex-shrink-0 text-sm text-left cursor-base font-normal focus:outline-none rounded-base",
                          active && "bg-neutral-100 dark:bg-neutral-700",
                          selected &&
                            "bg-primary-50 text-primary-800 dark:bg-primary-200 dark:bg-opacity-15 dark:text-primary-200",
                        )}
                      >
                        <span
                          className={cx(
                            "flex-1 block truncate",
                            selected ? "font-semibold" : "font-normal"
                          )}
                        >
                          {person}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center justify-center w-10">
                            <Icon
                              as={CheckIcon}
                              label="check"
                              className="w-5 h-5 text-primary-500"
                            />
                          </span>
                        )}
                      </button>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  );
}`,
        readOnly: false,
      },
    ],
  },
];

const listboxComponent = {
  name: "Listbox",
  importer: `import { Listbox, Transition } from "@headlessui/react";
import { cx } from "@vechaiui/react";`,
  demoList,
  propList,
};

export default function Listbox() {
  return (
    <>
      <SEO title="Tailwind CSS Listbox" />
      <DocumentBuilder component={listboxComponent} />
    </>
  );
}
