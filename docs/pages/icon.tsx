import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Icon",
    value: "icon",
    propTypes: [
      {
        property: "as",
        type: ["React.ElementType"],
        default: "QuestionCircleIcon",
        values: [],
        description: "The element or component to use",
      },
      {
        property: "inline",
        type: ["boolean"],
        default: false,
        values: [],
        description: "Makes icon inline",
      },
      {
        property: "color",
        type: ["string"],
        default: "",
        values: [],
        description: "Color of the icon",
      },
      {
        property: "label",
        type: ["string"],
        default: "",
        values: [],
        description: "The accessible label for the icon",
      },
    ],
  },
];

const demoList = [
  {
    name: "Basic Usage",
    files: [
      {
        name: "icon.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Icon as={InfoIcon} label="info" className="w-6 h-6 text-blue-500" />
  <Icon as={CheckCircleIcon} label="check-circle" className="w-6 h-6 text-green-500" />
  <Icon as={XCricleIcon} label="x-circle" className="w-6 h-6 text-red-500" />
  <Icon as={ExclamationIcon} label="exclamationIcon" className="w-6 h-6 text-yellow-500" />
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const iconComponent = {
  name: "Icon",
  importer: `import { Icon } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Icon() {
  return (
    <>
      <SEO
        title="Tailwind CSS Icon"
        description="An icon is a graphic symbol designed to visually indicate the purpose of an interface element."
      />
      <DocumentBuilder component={iconComponent} />
    </>
  );
}
