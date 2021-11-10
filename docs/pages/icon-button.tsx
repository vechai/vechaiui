import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

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
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <IconButton>
    <Icon as={GiftIcon} label="gift" className="w-4 h-4" />
  </IconButton>
  <IconButton variant="solid">
    <Icon as={GiftIcon} label="gift" className="w-4 h-4" />
  </IconButton>
  <IconButton variant="light">
    <Icon as={GiftIcon} label="gift" className="w-4 h-4" />
  </IconButton>
  <IconButton variant="ghost">
    <Icon as={GiftIcon} label="gift" className="w-4 h-4" />
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
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <IconButton size="xs" variant="solid" color="primary">
    <Icon as={GiftIcon} label="gift" className="w-3.5 h-3.5" />
  </IconButton>
  <IconButton size="sm" variant="solid" color="primary">
    <Icon as={GiftIcon} label="gift" className="w-4 h-4" />
  </IconButton>
  <IconButton size="md" variant="solid" color="primary">
    <Icon as={GiftIcon} label="gift" className="w-4 h-4" />
  </IconButton>
  <IconButton size="lg" variant="solid" color="primary">
    <Icon as={GiftIcon} label="gift" className="w-6 h-6" />
  </IconButton>
  <IconButton size="xl" variant="solid" color="primary">
    <Icon as={GiftIcon} label="gift" className="w-8 h-8" />
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
  return (
    <>
      <SEO title="Tailwind CSS IconButton" />
      <DocumentBuilder component={iconButtonComponent} />
    </>
  );
}
