import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "skeleton.tsx",
        code: `<div className="flex flex-col p-8 space-y-10">
  <div className="space-y-2">
    <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
    <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
    <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
  </div>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Color",
    files: [
      {
        name: "skeleton.tsx",
        code: `<div className="flex flex-col p-8 space-y-10">
  <div className="space-y-2">
    <div className="w-3/4 h-4 rounded bg-primary-400 animate-pulse"></div>
    <div className="w-full h-4 rounded bg-primary-400 animate-pulse"></div>
    <div className="w-5/6 h-4 rounded bg-primary-400 animate-pulse"></div>
  </div>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Card skeleton",
    files: [
      {
        name: "skeleton.tsx",
        code: `<div className="flex flex-col p-8 space-y-10">
  <div className="w-full p-4 border border-gray-200 rounded-md shadow-sm">
    <div className="flex space-x-3">
      <div className="flex-none w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
      <div className="w-full space-y-2">
        <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const skeletonComponent = {
  name: "Skeleton",
  demoList,
};

export default function Skeleton() {
  return (
    <>
      <SEO title="Tailwind CSS Skeleton" />
      <DocumentBuilder component={skeletonComponent} />
    </>
  );
}
