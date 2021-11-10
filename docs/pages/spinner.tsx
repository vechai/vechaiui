import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Spinner",
    value: "spinner",
    propTypes: [
      {
        property: "size",
        type: ["xs", "sm", "md", "lg", "xl"],
        default: "sm",
        values: ["xs", "sm", "md", "lg", "xl"],
        description: "Size of the spinner",
      },
    ],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "spinner.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Spinner />
  <Spinner className="text-primary-500" />
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
  {
    name: "Sizes",
    files: [
      {
        name: "spinner.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Spinner size="xs" />
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
  <Spinner size="xl" />
</div>`,
        readOnly: false,
      },
    ],
    openEditor: false,
  },
];

const spinnerComponent = {
  name: "Spinner",
  importer: `import { Spinner } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Spinner() {
  return (
    <>
      <SEO title="Tailwind CSS Spinner" />
      <DocumentBuilder component={spinnerComponent} />
    </>
  );
}
