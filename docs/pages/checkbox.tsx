import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import { twFile } from "@utils/tw";
import SEO from "@components/seo";

const checkboxPropTypes = [
  {
    property: "color",
    type: ["string"],
    default: "primary",
    values: [],
    description: "Set the checkbox color",
  },
  {
    property: "size",
    type: ["sm", "md", "lg", "xl"],
    default: "md",
    values: ["sm", "md", "lg", "xl"],
    description: "Size of the checkbox",
  },
  {
    property: "disabled",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes checkbox disabled",
  },
  {
    property: "invalid",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes checkbox invalid",
  },
  {
    property: "required",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes checkbox required",
  },
  {
    property: "readOnly",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes checkbox readOnly",
  },
  {
    property: "defaultChecked",
    type: ["boolean"],
    default: false,
    values: [],
    description: "The checkbox will be initially checked",
  },
  {
    property: "checked",
    type: ["boolean"],
    default: false,
    values: [],
    description: "The checkbox will be checked",
  },
  {
    property: "id",
    type: ["string"],
    default: "",
    values: [],
    description: "Checkbox id",
  },
  {
    property: "name",
    type: ["string"],
    default: "",
    values: [],
    description: "Checkbox name",
  },
  {
    property: "value",
    type: ["string", "number"],
    default: "",
    values: [],
    description: "Checkbox value",
  },
  {
    property: "onChange",
    type: ["React.ChangeEventHandler<HTMLInputElement>"],
    default: "",
    values: [],
    description: "The callback invoked when the checked state of the `Checkbox` changes..",
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
    description: "Refers to the id of the element that labels the checkbox element.",
  },
];

const checkboxGroupPropTypes = [
  {
    property: "id",
    type: ["string"],
    default: "",
    values: [],
    description: "The id of the checkbox group.",
  },
  {
    property: "name",
    type: ["string"],
    default: "",
    values: [],
    description: "The name of the checkbox group. This prop is passed to each checkbox",
  },
  {
    property: "defaultValue",
    type: ['CheckboxProps["defaultValue"]'],
    default: "",
    values: [],
    description: "The initial value of the checkbox group",
  },
  {
    property: "value",
    type: ['CheckboxProps["value"]'],
    default: "",
    values: [],
    description: "The value of the checkbox group",
  },
  {
    property: "onChange",
    type: ['(value: Array<CheckboxProps["value"]>) => void;'],
    default: "",
    values: [],
    description: "The callback fired when any children Checkbox is checked or unchecked",
  },
  {
    property: "inline",
    type: ["boolean"],
    default: false,
    values: [],
    description: "The checkboxes will aligned horizontally",
  },
  {
    property: "size",
    type: ['CheckboxProps["size"]'],
    default: "",
    values: [],
    description: "Size of all wrapped checkbox",
  },
  {
    property: "color",
    type: ['CheckboxProps["color"]'],
    default: "",
    values: [],
    description: "Color of all wrapped checkbox",
  },
];

const propList = [
  {
    name: "Checkbox",
    value: "checkbox",
    propTypes: checkboxPropTypes,
  },
  {
    name: "Checkbox.Group",
    value: "checkbox-group",
    propTypes: checkboxGroupPropTypes,
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "checkbox.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Checkbox>Checkbox</Checkbox>
  <Checkbox defaultChecked>Checkbox</Checkbox>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Adding color",
    files: [
      {
        name: "checkbox.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Checkbox color="orange">Checkbox</Checkbox>
  <Checkbox color="orange" defaultChecked>Checkbox</Checkbox>
</div>`,
        readOnly: false,
      },
      twFile,
    ],
  },
  {
    name: "Invalid state",
    files: [
      {
        name: "checkbox.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Checkbox invalid>Checkbox</Checkbox>
  <Checkbox invalid defaultChecked>
    Checkbox
  </Checkbox>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Disabled state",
    files: [
      {
        name: "checkbox.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Checkbox disabled>Checkbox</Checkbox>
  <Checkbox disabled defaultChecked>
    Checkbox
  </Checkbox>
  <Checkbox readOnly>Checkbox</Checkbox>
  <Checkbox readOnly defaultChecked>
    Checkbox
  </Checkbox>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Sizes",
    files: [
      {
        name: "checkbox.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Checkbox size="sm">Checkbox</Checkbox>
  <Checkbox size="md">Checkbox</Checkbox>
  <Checkbox size="lg">Checkbox</Checkbox>
  <Checkbox size="xl">Checkbox</Checkbox>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Checkbox group",
    files: [
      {
        name: "checkbox.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Checkbox.Group
    className="space-x-4"
    inline
    defaultValue={["1", "3"]}
  >
    <Checkbox value="1">First</Checkbox>
    <Checkbox value="2">Second</Checkbox>
    <Checkbox value="3">Third</Checkbox>
  </Checkbox.Group>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Form control",
    files: [
      {
        name: "checkbox.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <FormControl>
    <FormLabel>Checkbox Group</FormLabel>
    <Checkbox.Group
      className="space-x-4"
      inline
      defaultValue={["1", "3"]}
    >
      <Checkbox value="1">First</Checkbox>
      <Checkbox value="2">Second</Checkbox>
      <Checkbox value="3">Third</Checkbox>
    </Checkbox.Group>
    <FormHelperText>Select only if you're a fan.</FormHelperText>
  </FormControl>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const checkboxComponent = {
  name: "Checkbox",
  importer: 'import { Checkbox } from "@vechaiui/react"',
  demoList,
  propList,
}

export default function Checkbox() {
  return (
    <>
      <SEO 
        title="Tailwind CSS Checkbox"
        description="An input for choosing from predefined options."
      />
      <DocumentBuilder component={checkboxComponent} />
    </>
  );
}
