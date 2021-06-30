import * as React from "react";

import DocumentBuilder from "@components/document-builder";

const iconButtonPropTypes = [
  {
    property: "icon",
    type: ["React.ReactElement"],
    default: '',
    values: [],
    description: "The icon to be used in the button.",
  },
  {
    property: "aria-label",
    type: ["string"],
    default: "",
    values: [],
    description: "A label that describes the button",
  },
  {
    extend: true,
    path: '/button',
    external: false,
    label: "See more `button` props."
  }
];

const propList = [
  {
    name: "IconButton",
    value: "icon-button",
    propTypes: iconButtonPropTypes,
  },
];

const demoList = [
  {
    name: "Variants",
    files: [
      {
        name: "icon-button.tsx",
        code: `<div className="flex w-full p-8 space-x-4">
  <IconButton>
    <GiftIcon className="w-4 h-4" />
  </IconButton>
  <IconButton variant="solid">
    <GiftIcon className="w-4 h-4" />
  </IconButton>
  <IconButton variant="light">
    <GiftIcon className="w-4 h-4" />
  </IconButton>
  <IconButton variant="ghost">
    <GiftIcon className="w-4 h-4" />
  </IconButton>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Sizes",
    files: [
      {
        name: "icon-button.tsx",
        code: `<div className="flex w-full p-8 space-x-4">
  <IconButton size="xs" variant="solid" color="primary">
    <GiftIcon className="w-3.5 h-3.5" />
  </IconButton>
  <IconButton size="sm" variant="solid" color="primary">
    <GiftIcon className="w-4 h-4" />
  </IconButton>
  <IconButton size="md" variant="solid" color="primary">
    <GiftIcon className="w-4 h-4" />
  </IconButton>
  <IconButton size="lg" variant="solid" color="primary">
    <GiftIcon className="w-6 h-6" />
  </IconButton>
  <IconButton size="xl" variant="solid" color="primary">
    <GiftIcon className="w-8 h-8" />
  </IconButton>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const iconButtonComponent = {
  name: "IconButton",
  importer: `import { IconButton } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function IconButton() {
  return <DocumentBuilder component={iconButtonComponent} />;
}
