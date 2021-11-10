import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import { twFile } from "@utils/tw";
import SEO from "@components/seo";

const textareaPropTypes = [
  {
    extend: true,
    path: '/input',
    external: false,
    label: "See more `input` props."
  }
];

const propList = [
  {
    name: "Textarea",
    value: "textarea",
    propTypes: textareaPropTypes,
  },
];

const demoList = [
  {
    name: "Basic Usage",
    files: [
      {
        name: "textarea.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Textarea placeholder="jon@gmail.com" />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Adding color",
    files: [
      {
        name: "textarea.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Textarea color="orange" placeholder="jon@gmail.com" />
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
        name: "textarea.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Textarea disabled placeholder="jon@gmail.com" />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Invalid state",
    files: [
      {
        name: "textarea.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Textarea invalid placeholder="jon@gmail.com" />
</div>`,
        readOnly: false,
      },
    ],
  },
];

const textareaComponent = {
  name: "Textarea",
  importer: `import { Textarea } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Textarea() {
  return (
    <>
      <SEO title="Tailwind CSS Textarea" description="A form control for editing multi-line text." />
      <DocumentBuilder component={textareaComponent} />
    </>
  );
}
