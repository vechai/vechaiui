import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";
import { twFile } from "@utils/tw";

const buttonPropTypes = [
  {
    property: "color",
    type: ["string"],
    default: "",
    values: [],
    description: "Set the button color",
  },
  {
    property: "size",
    type: ["xs", "sm", "md", "lg", "xl"],
    default: "md",
    values: ["xs", "sm", "md", "lg", "xl"],
    description: "Size of the button",
  },
  {
    property: "variant",
    type: ["link", "solid", "outline", "light", "ghost"],
    default: "outline",
    values: ["link", "solid", "outline", "light", "ghost"],
    description: "Controls button appearance",
  },
  {
    property: "loading",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Shows loading spinner",
  },
  {
    property: "loadingText",
    type: ["string"],
    default: "",
    values: [],
    description: "The label to show in the button when loading is true",
  },
  {
    property: "type",
    type: ["button", "reset", "submit"],
    default: "",
    values: ["button", "reset", "submit"],
    description: "Set the original html type of button",
  },
  {
    property: "leftIcon",
    type: ["React.ReactElement"],
    default: "",
    values: [],
    description: "Adds icon before button label",
  },
  {
    property: "rightIcon",
    type: ["React.ReactElement"],
    default: "",
    values: [],
    description: "Adds icon after button label",
  },
  {
    property: "disabled",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes button disabled ",
  },
  {
    property: "active",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Makes button active",
  },
];

const buttonGroupPropTypes = [
  {
    property: "attached",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Button will be altered to look flushed together",
  },
  {
    property: "disabled",
    type: ["boolean"],
    default: false,
    values: [],
    description: "Set all wrapped button will be disabled",
  },
  {
    property: "size",
    type: ['ButtonProps["size"]'],
    default: "",
    values: ["xs", "sm", "md", "lg", "xl"],
    description: "Size of all wrapped button",
  },
  {
    property: "color",
    type: ["string"],
    default: "",
    values: [],
    description: "Set all wrapped button color",
  },
];

const propList = [
  {
    name: "Button",
    value: "button",
    propTypes: buttonPropTypes,
  },
  {
    name: "Button.Group",
    value: "button-group",
    propTypes: buttonGroupPropTypes,
  },
];

const demoList = [
  {
    name: "Variants",
    files: [
      {
        name: "button.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Button>Button</Button>
  <Button variant="solid">Button</Button>
  <Button variant="light">Button</Button>
  <Button variant="ghost">Button</Button>
  <Button variant="link">Button</Button>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
  {
    name: "Mixing variant and color",
    files: [
      {
        name: "button.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Button color="primary">Button</Button>
  <Button variant="solid" color="primary">Button</Button>
  <Button variant="light" color="primary">Button</Button>
  <Button variant="ghost" color="primary">Button</Button>
  <Button variant="link" color="primary">Button</Button>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Adding color",
    files: [
      {
        name: "button.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Button color="orange">Button</Button>
  <Button variant="solid" color="orange">Button</Button>
  <Button variant="light" color="orange">Button</Button>
  <Button variant="ghost" color="orange">Button</Button>
  <Button variant="link" color="orange">Button</Button>
</div>`,
        readOnly: false,
      },
      twFile,
    ],
  },
  {
    name: "Sizes",
    files: [
      {
        name: "button.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Button size="xs" variant="solid" color="primary">
    Button
  </Button>
  <Button size="sm" variant="solid" color="primary">
    Button
  </Button>
  <Button size="md" variant="solid" color="primary">
    Button
  </Button>
  <Button size="lg" variant="solid" color="primary">
    Button
  </Button>
  <Button size="xl" variant="solid" color="primary">
    Button
  </Button>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "With icons",
    files: [
      {
        name: "button.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Button
    variant="solid"
    color="primary"
    leftIcon={<Icon as={GiftIcon} label="gift" className="w-4 h-4 mr-1" />}
  >
    Button
  </Button>
  <Button color="primary" rightIcon={<Icon as={GiftIcon} label="gift" className="w-4 h-4 ml-1" />}>
    Button
  </Button>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Loading state",
    files: [
      {
        name: "button.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Button loading>Button</Button>
  <Button color="primary" loading loadingText="Loading...">
    Button
  </Button>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Button Group",
    files: [
      {
        name: "button.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Button.Group variant="solid" className="space-x-2">
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </Button.Group>

  <Button.Group variant="solid" color="primary" attached>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </Button.Group>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const component = {
  name: "Button",
  importer: 'import { Button } from "@vechaiui/react"',
  demoList,
  propList,
};

export default function Button() {
  return (
    <>
      <SEO
        title="Tailwind CSS Button"
        description="Buttons trigger an action such as submitting a form or showing/hiding an interface component."
      />
      <DocumentBuilder component={component} />
    </>
  );
}
