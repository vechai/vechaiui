import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const imagePropTypes = [
  {
    property: "as",
    type: ["React.ElementType"],
    default: "NativeImage",
    values: [],
    description: "The element or component to use",
  },
  {
    property: "ignoreFallback",
    type: ["boolean"],
    default: false,
    values: [],
    description: "ignoreFallback",
  },
  {
    property: "fallback",
    type: ["React.ReactElement;"],
    default: '',
    values: [],
    description: "Fallback component",
  },
  {
    property: "fallbackSrc",
    type: ["string"],
    default: '',
    values: [],
    description: "Fallback src",
  },
  {
    property: "loading",
    type: ["string"],
    default: "",
    values: ["eager", "lazy"],
    description: "Defines loading strategy",
  },
];

const propList = [
  {
    name: "Image",
    value: "image",
    propTypes: imagePropTypes,
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "image.tsx",
        code: `<div className="flex flex-wrap w-full p-4 space-x-4">
  <Image
    alt="bruce wayne"
    htmlWidth={100}
    htmlHeight={50}
    className="object-cover"
    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  />
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const imageComponent = {
  name: "Image",
  importer: `import { Image } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Image() {
  return (
    <>
      <SEO title="Tailwind CSS Image" description="An element for embedding images." />
      <DocumentBuilder component={imageComponent} />
    </>
  );
}
