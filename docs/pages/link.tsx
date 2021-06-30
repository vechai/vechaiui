import * as React from "react";

import DocumentBuilder from "@components/document-builder";

const propList = [
  {
    name: "Link",
    value: "link",
    propTypes: [
      {
        property: "as",
        type: ["React.ElementType"],
        default: 'a',
        values: [],
        description: "The element or component to use in place of `a`",
      },
      {
        property: "disabled",
        type: ["boolean"],
        default: false,
        values: [],
        description: "Makes link disabled",
      },
      {
        property: "external",
        type: ["boolean"],
        default: false,
        values: [],
        description: "Makes link open in new tab",
      },
    ],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "link.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Link>Vechai UI</Link>
  <p>
    Did you know that <Link href="#">links can live inline with text</Link>
  </p>
  <Link disabled>Vechai UI</Link>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const linkComponent = {
  name: "Link",
  importer: `import { Link } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Link() {
  return <DocumentBuilder component={linkComponent} />;
}
