import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "kbd.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Kbd>⌘</Kbd>
  <Kbd>shift</Kbd>
  <Kbd>.</Kbd>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const kbdComponent = {
  name: "Kbd",
  importer: `import { Kbd } from "@vechaiui/react"`,
  demoList,
};

export default function Kbd() {
  return (
    <>
      <SEO title="Tailwind CSS Kbd" />
      <DocumentBuilder component={kbdComponent} />
    </>
  );
}
