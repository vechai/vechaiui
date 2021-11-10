import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Breadcrumb",
    value: "breadcrumb",
    propTypes: [
      {
        property: "separator",
        type: ["string", "React.ElementType"],
        default: '/',
        values: [],
        description: "The visual separator between each breadcrumb item",
      },
      {
        property: "addSeparator",
        type: ["boolean"],
        default: true,
        values: [],
        description: "Add the breadcrumb separator automatically",
      },
    ],
  },
  {
    name: "Breadcrumb.Item",
    value: "breadcrumb-item",
    propTypes: [
      {
        property: "currentPage",
        type: ["boolean"],
        default: false,
        values: [],
        description: "Set currentPage",
      },
    ],
  },
  {
    name: "Breadcrumb.Link",
    value: "breadcrumb-link",
    propTypes: [
      {
        extend: true,
        path: '/link',
        external: false,
        label: "See more `link` props."
      }
    ],
  },
  {
    name: "Breadcrumb.Separator",
    value: "breadcrumb-separator",
    propTypes: [],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "breadcrumb.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Breadcrumb>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Item currentPage>
      <Breadcrumb.Link href="#">Breadcrumb</Breadcrumb.Link>
    </Breadcrumb.Item>
  </Breadcrumb>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Separator",
    files: [
      {
        name: "breadcrumb.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Breadcrumb separator="-">
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">About</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Item currentPage>
      <Breadcrumb.Link href="#">Contact</Breadcrumb.Link>
    </Breadcrumb.Item>
  </Breadcrumb>

  <Breadcrumb
    separator={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        className="fill-current"
      >
        <path
          fill-rule="evenodd"
          d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
        ></path>
      </svg>
    }
  >
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">About</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Item currentPage>
      <Breadcrumb.Link href="#">Contact</Breadcrumb.Link>
    </Breadcrumb.Item>
  </Breadcrumb>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const breadcrumbComponent = {
  name: "Breadcrumb",
  importer: `import { Breadcrumb } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Breadcrumb() {
  return (
    <>
      <SEO 
        title="Tailwind CSS Breadcrumb"
        description="A list of links showing the location of the current page in the navigational hierarchy."
      />
      <DocumentBuilder component={breadcrumbComponent} />
    </>
  );
}
