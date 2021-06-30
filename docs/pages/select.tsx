import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import { twFile } from "@utils/tw";

const selectPropTypes = [
  {
    extend: true,
    path: "/input",
    external: false,
    label: "See more `input` props.",
  },
];

const propList = [
  {
    name: "Select",
    value: "select",
    propTypes: selectPropTypes,
  },
];

const demoList = [
  {
    name: "Basic Usage",
    files: [
      {
        name: "select.tsx",
        code: `<div className="flex w-full p-8 space-x-4">
  <Select placeholder="Outline">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Adding color",
    files: [
      {
        name: "select.tsx",
        code: `<div className="flex w-full p-8 space-x-4">
  <Select placeholder="Outline" color="orange">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
</div>`,
        readOnly: false,
      },
      twFile,
    ],
  },
  {
    name: "Disabled state",
    files: [
      {
        name: "select.tsx",
        code: `<div className="flex w-full p-8 space-x-4">
  <Select disabled placeholder="Outline">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Invalid state",
    files: [
      {
        name: "select.tsx",
        code: `<div className="flex w-full p-8 space-x-4">
  <Select invalid placeholder="Outline">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Sizes",
    files: [
      {
        name: "select.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Select placeholder="Outline" size="xs">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>

  <Select placeholder="Outline" size="sm">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>

  <Select placeholder="Outline" size="md">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>

  <Select placeholder="Outline" size="lg">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>

  <Select placeholder="Outline" size="xl">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const selectComponent = {
  name: "Select",
  importer: `import { Select } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Select() {
  return <DocumentBuilder component={selectComponent} />;
}
