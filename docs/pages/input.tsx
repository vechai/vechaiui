import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import { twFile } from "@utils/tw";
import SEO from "@components/seo";

const inputPropTypes = [
  {
    property: "color",
    type: ["string"],
    default: "primary",
    values: [],
    description: "Set the input color",
  },
  {
    property: "size",
    type: ["xs", "sm", "md", "lg", "xl"],
    default: "md",
    values: ["xs", "sm", "md", "lg", "xl"],
    description: "Size of the input",
  },
  {
    property: "variant",
    type: ["outline", "solid"],
    default: "outline",
    values: ["outline", "solid"],
    description: "Controls input appearance",
  },
  {
    property: "disabled",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes input disabled",
  },
  {
    property: "invalid",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes input invalid",
  },
  {
    property: "required",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes input required",
  },
  {
    property: "readOnly",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes input readOnly",
  },
  {
    property: "aria-label",
    type: ["string"],
    default: "",
    values: [],
    description: "A label that describes the input",
  },
  {
    property: "aria-describedby",
    type: ["string"],
    default: "",
    values: [],
    description: "The id of the element that describes the input",
  },
];

const propList = [
  {
    name: "Input",
    value: "input",
    propTypes: inputPropTypes,
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "input.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Input placeholder="jon@gmail.com" />
  <Input disabled placeholder="jon@gmail.com" />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Variants",
    files: [
      {
        name: "input.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Input placeholder="jon@gmail.com" />
  <Input placeholder="jon@gmail.com" variant="solid" />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Adding color",
    files: [
      {
        name: "input.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Input color="orange" placeholder="jon@gmail.com" />
</div>`,
        readOnly: false,
      },
      twFile
    ],
  },
  {
    name: "Invalid state",
    files: [
      {
        name: "input.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Input invalid placeholder="jon@gmail.com" />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Sizes",
    files: [
      {
        name: "input.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Input placeholder="jon@gmail.com" size="xs" />
  <Input placeholder="jon@gmail.com" size="sm" />
  <Input placeholder="jon@gmail.com" size="md" />
  <Input placeholder="jon@gmail.com" size="lg" />
  <Input placeholder="jon@gmail.com" size="xl" />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Input Element",
    files: [
      {
        name: "input.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Input.Group>
    <Input.LeftElement
      children="$"
      className="pointer-events-none text-neutral-300"
    />
    <Input placeholder="ben@gmail.com" />
    <Input.RightElement
      children={<Icon as={GiftIcon} label="gift" className="w-4 h-4 text-green-500" />}
    />
  </Input.Group>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Input Addon",
    files: [
      {
        name: "input.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Input.Group>
    <Input.LeftAddon children="https://" />
    <Input placeholder="mysite" />
    <Input.RightAddon children=".com" />
  </Input.Group>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const inputComponent = {
  name: "Input",
  importer: `import { Input } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Input() {
  return (
    <>
      <SEO title="Tailwind CSS Input" description="A form control that accepts a single line of text." />
      <DocumentBuilder component={inputComponent} />
    </>
  )
}
