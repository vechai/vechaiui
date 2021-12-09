import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "code.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Code>New Issue</Code>
  <Code>Cmd/Ctrl</Code>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const codeComponent = {
  name: "Code",
  importer: `import { Code } from "@vechaiui/react"`,
  demoList,
};

export default function Code() {
  return (
    <>
      <SEO title="Tailwind CSS Code" />
      <DocumentBuilder component={codeComponent} />
    </>
  )
}
