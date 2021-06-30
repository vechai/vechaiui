import * as React from "react";

import DocumentBuilder from "@components/document-builder";

const propList = [
  {
    name: "Code",
    value: "code",
    propTypes: [],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "code.tsx",
        code: `<div className="flex w-full p-8 space-x-4">
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
  propList,
};

export default function Code() {
  return <DocumentBuilder component={codeComponent} />;
}
