import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import { twFile } from "@utils/tw";
import SEO from "@components/seo";

const switchPropTypes = [
  {
    property: "color",
    type: ["string"],
    default: "primary",
    values: [],
    description: "Set the switch color",
  },
  {
    property: "size",
    type: ["sm", "md", "lg", "xl"],
    default: "md",
    values: ["sm", "md", "lg", "xl"],
    description: "Size of the switch",
  },
  {
    property: "disabled",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes switch disabled",
  },
  {
    property: "invalid",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes switch invalid",
  },
  {
    property: "defaultChecked",
    type: ["boolean"],
    default: false,
    values: [],
    description: "The switch will be initially checked",
  },
  {
    property: "checked",
    type: ["boolean"],
    default: false,
    values: [],
    description: "The switch will be checked",
  },
  {
    property: "id",
    type: ["string"],
    default: "",
    values: [],
    description: "Switch id",
  },
  {
    property: "name",
    type: ["string"],
    default: "",
    values: [],
    description: "Switch name",
  },
  {
    property: "value",
    type: ["string", "number"],
    default: "",
    values: [],
    description: "Switch value",
  },
  {
    property: "onChange",
    type: ["React.ChangeEventHandler<HTMLInputElement>"],
    default: "",
    values: [],
    description:
      "The callback invoked when the checked state of the `Switch` changes..",
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
    description: "The id of the element that describes the input.",
  },
  {
    property: "aria-labelledby",
    type: ["string"],
    default: "",
    values: [],
    description:
      "Refers to the id of the element that labels the checkbox element.",
  },
];

const propList = [
  {
    name: "Switch",
    value: "switch",
    propTypes: switchPropTypes,
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "switch.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Switch />
  <Switch defaultChecked />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Adding color",
    files: [
      {
        name: "switch.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Switch color="orange" />
  <Switch defaultChecked color="orange" />
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
        name: "switch.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Switch disabled />
  <Switch defaultChecked disabled />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Sizes",
    files: [
      {
        name: "switch.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Switch size="sm" />
  <Switch size="md" />
  <Switch size="lg" />
  <Switch size="xl" />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Form control",
    files: [
      {
        name: "switch.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <FormControl className="flex items-center">
    <FormLabel htmlFor="email-alerts" className="mb-0 mr-2">
      Enable email alerts?
    </FormLabel>
    <Switch id="email-alerts" />
  </FormControl>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const switchComponent = {
  name: "Switch",
  importer: 'import { Switch } from "@vechaiui/react"',
  demoList,
  propList,
};

export default function Switch() {
  return (
    <>
      <SEO
        title="Tailwind CSS Swicth"
        description="A control used to switch between two states: often on or off."
      />
      <DocumentBuilder component={switchComponent} />
    </>
  );
}
