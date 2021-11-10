import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const tagPropTypes = [
  {
    property: "color",
    type: ["string"],
    default: "",
    values: [],
    description: "The color of tag",
  },
  {
    property: "variant",
    type: ["outline", "solid", "light"],
    default: "outline",
    values: ["outline", "solid", "light"],
    description: "Controls tag appearance",
  },
  {
    property: "size",
    type: ["sm", "md", "lg", "xl"],
    default: "md",
    values: ["sm", "md", "lg", "xl"],
    description: "The size of tag",
  },
];

const propList = [
  {
    name: "Tag",
    value: "tag",
    propTypes: tagPropTypes,
  },
  {
    name: "Tag.CloseButton",
    value: "tag-close-button",
    propTypes: [
      {
        property: "iconClassName",
        type: ["string"],
        default: "",
        values: [],
        description: "The icon class name",
      },
    ],
  },
  {
    name: "Tag.Label",
    value: "tag-label",
    propTypes: [],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "tag.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
    <Tag>Default</Tag>
    <Tag>
      <Tag.Label>Default</Tag.Label>
      <Tag.CloseButton />
    </Tag>
    <Tag color="primary">
      <Tag.Label>Default</Tag.Label>
      <Tag.CloseButton className="text-primary-600 dark:text-primary-400" />
    </Tag>
    <Tag color="orange">
      <Tag.Label>Default</Tag.Label>
      <Tag.CloseButton className="text-orange-600 dark:text-orange-400" />
    </Tag>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Solid variant",
    files: [
      {
        name: "tag.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Tag variant="solid">Default</Tag>
  <Tag variant="solid">
    <Tag.Label>Default</Tag.Label>
    <Tag.CloseButton />
  </Tag>
  <Tag color="primary" variant="solid">
    <Tag.Label>Default</Tag.Label>
    <Tag.CloseButton className="text-white dark:text-primary-400" />
  </Tag>
  <Tag color="orange" variant="solid">
    <Tag.Label>Default</Tag.Label>
    <Tag.CloseButton className="text-white dark:text-orange-400" />
  </Tag>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Light variant",
    files: [
      {
        name: "tag.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Tag variant="light">Default</Tag>
  <Tag variant="light">
    <Tag.Label>Default</Tag.Label>
    <Tag.CloseButton />
  </Tag>
  <Tag color="primary" variant="light">
    <Tag.Label>Default</Tag.Label>
    <Tag.CloseButton className="text-primary-600 dark:text-primary-400" />
  </Tag>
  <Tag color="orange" variant="light">
    <Tag.Label>Default</Tag.Label>
    <Tag.CloseButton className="text-orange-600 dark:text-orange-400" />
  </Tag>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Sizes",
    files: [
      {
        name: "tag.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Tag size="sm">Default</Tag>
  <Tag size="md">Default</Tag>
  <Tag size="lg">Default</Tag>
  <Tag size="xl">Default</Tag>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const tagComponent = {
  name: "Tag",
  importer: `import { Tag } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Tag() {
  return (
    <>
      <SEO title="Tailwind CSS Tag" description="" />
      <DocumentBuilder component={tagComponent} />
    </>
  );
}
