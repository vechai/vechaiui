import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import { twFile } from "@utils/tw";
import SEO from "@components/seo";

const badgePropTypes = [
  {
    property: "color",
    type: ["string"],
    default: '',
    values: [],
    description: "The color of badge",
  },
  {
    property: "variant",
    type: ["string"],
    default: "light",
    values: ["solid", "light"],
    description: "Controls badge appearance",
  },
  {
    property: "size",
    type: ["sm", "md"],
    default: "md",
    values: ["sm", "md"],
    description: "The size of badge",
  },
  {
    property: "hasShadow",
    type: ["boolean"],
    default: false,
    values: [],
    description: "If `true` badge has shadow",
  },
];

const propList = [
  {
    name: "Badge",
    value: "badge",
    propTypes: badgePropTypes,
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "badge.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Badge>1</Badge>
  <Badge variant="solid">1</Badge>
  <Badge color="primary">1</Badge>
  <Badge color="primary" variant="solid">1</Badge>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Adding color",
    files: [
      {
        name: "badge.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Badge color="orange">1</Badge>
  <Badge color="orange" variant="solid">1</Badge>
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
        name: "badge.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Badge size="sm">1</Badge>
  <Badge size="sm" variant="solid">
    1
  </Badge>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const badgeComponent = {
  name: "Badge",
  importer: `import { Badge } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Badge() {
  return (
    <>
      <SEO 
        title="Tailwind CSS Badge"
        description="Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count."
      />
      <DocumentBuilder component={badgeComponent} />
    </>
  );
}
