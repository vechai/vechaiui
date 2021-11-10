import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import { twFile } from "@utils/tw";
import SEO from "@components/seo";

const radioPropTypes = [
  {
    property: "color",
    type: ["string"],
    default: "primary",
    values: [],
    description: "Set the radio color",
  },
  {
    property: "size",
    type: ["sm", "md", "lg", "xl"],
    default: "md",
    values: ["sm", "md", "lg", "xl"],
    description: "Size of the radio",
  },
  {
    property: "disabled",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes radio disabled",
  },
  {
    property: "invalid",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes radio invalid",
  },
  {
    property: "required",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes radio required",
  },
  {
    property: "readOnly",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes radio readOnly",
  },
  {
    property: "defaultChecked",
    type: ["boolean"],
    default: false,
    values: [],
    description: "The radio will be initially checked",
  },
  {
    property: "checked",
    type: ["boolean"],
    default: false,
    values: [],
    description: "The radio will be checked",
  },
  {
    property: "id",
    type: ["string"],
    default: "",
    values: [],
    description: "Radio id",
  },
  {
    property: "name",
    type: ["string"],
    default: "",
    values: [],
    description: "Radio name",
  },
  {
    property: "value",
    type: ["string", "number"],
    default: "",
    values: [],
    description: "Radio value",
  },
  {
    property: "onChange",
    type: ["React.ChangeEventHandler<HTMLInputElement>"],
    default: "",
    values: [],
    description:
      "The callback invoked when the checked state of the `Radio` changes..",
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

const radioGroupPropTypes = [
  {
    property: "id",
    type: ["string"],
    default: "",
    values: [],
    description: "The id of the radio group.",
  },
  {
    property: "name",
    type: ["string"],
    default: "",
    values: [],
    description:
      "The name of the radio group. This prop is passed to each radio",
  },
  {
    property: "defaultValue",
    type: ['RadioProps["defaultValue"]'],
    default: "",
    values: [],
    description: "The initial value of the radio group",
  },
  {
    property: "value",
    type: ['RadioProps["value"]'],
    default: "",
    values: [],
    description: "The value of the radio group",
  },
  {
    property: "onChange",
    type: ['(event: React.ChangeEvent, value: RadioProps["value"]) => void;'],
    default: "",
    values: [],
    description:
      "The callback fired when any children Radio is checked or unchecked",
  },
  {
    property: "inline",
    type: ["boolean"],
    default: false,
    values: [],
    description: "The radio will aligned horizontally",
  },
  {
    property: "size",
    type: ['RadioProps["size"]'],
    default: "",
    values: [],
    description: "Size of all wrapped radio",
  },
  {
    property: "color",
    type: ['RadioProps["color"]'],
    default: "",
    values: [],
    description: "Color of all wrapped radio",
  },
];

const propList = [
  {
    name: "Radio",
    value: "radio",
    propTypes: radioPropTypes,
  },
  {
    name: "Radio.Group",
    value: "radio-group",
    propTypes: radioGroupPropTypes,
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "radio.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Radio name="basic">First</Radio>
  <Radio name="basic" defaultChecked>
    Second
  </Radio>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Adding color",
    files: [
      {
        name: "radio.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Radio name="basic" color="orange">First</Radio>
  <Radio name="basic" defaultChecked color="orange">
    Second
  </Radio>
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
        name: "radio.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Radio invalid name="invalid">
    First
  </Radio>
  <Radio invalid name="invalid" defaultChecked>
    Second
  </Radio>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Disabled state",
    files: [
      {
        name: "radio.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Radio disabled name="disabled">
    First
  </Radio>
  <Radio disabled name="disabled" defaultChecked>
    Second
  </Radio>

  <Radio readOnly name="readOnly">
    First
  </Radio>
  <Radio readOnly name="readOnly" defaultChecked>
    Second
  </Radio>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Sizes",
    files: [
      {
        name: "radio.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Radio size="sm" name="size">
    Radio
  </Radio>
  <Radio size="md" name="size">
    Radio
  </Radio>
  <Radio size="lg" name="size">
    Radio
  </Radio>
  <Radio size="lg" name="size">
    Radio
  </Radio>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Radio group",
    files: [
      {
        name: "radio.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Radio.Group defaultValue="2" className="space-x-4" inline>
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
  </Radio.Group>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Form control",
    files: [
      {
        name: "radio.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <FormControl>
    <FormLabel>Radio Group</FormLabel>
    <Radio.Group defaultValue="2" className="space-x-4" inline>
      <Radio value="1">First</Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </Radio.Group>
    <FormHelperText>Select only if you're a fan.</FormHelperText>
  </FormControl>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const radioComponent = {
  name: "Radio",
  importer: 'import { Radio } from "@vechaiui/react"',
  demoList,
  propList,
};

export default function Radio() {
  return (
    <>
      <SEO
        title="Tailwind CSS Radio"
        description="Radio buttons allow a user to select a single option from a list of predefined options."
      />
      <DocumentBuilder component={radioComponent} />
    </>
  );
}
