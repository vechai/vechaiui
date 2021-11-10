import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

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
  <Link href="#">I'm Link</Link>
  <p>
    <Link href="#">Lorem Ipsum</Link>  is simply dummy text of the printing and typesetting industry.
  </p>
  <Link disabled>I'm Link</Link>
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
  return (
    <>
      <SEO title="Tailwind CSS Link" description="A link is a reference to a resource." />
      <DocumentBuilder component={linkComponent} />
    </>
  );
}
