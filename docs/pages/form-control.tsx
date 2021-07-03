import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const formControlPropTypes = [
  {
    property: "required",
    type: ["boolean"],
    default: false,
    values: [],
    description: "If `true`, this prop is passed to its children",
  },
  {
    property: "disabled",
    type: ["boolean"],
    default: false,
    values: [],
    description: "If `true`, this prop is passed to its children",
  },
  {
    property: "invalid",
    type: ["boolean"],
    default: false,
    values: [],
    description: "If `true`, this prop is passed to its children",
  },
  {
    property: "readOnly",
    type: ["boolean"],
    default: false,
    values: [],
    description: "If `true`, this prop is passed to its children",
  },
];

const propList = [
  {
    name: "FormControl",
    value: "form-control",
    propTypes: formControlPropTypes,
  },
];

const demoList = [
  {
    name: "Basic Usage",
    files: [
      {
        name: "form-control.tsx",
        code: `<div className="flex w-full p-8 space-x-4">
  <FormControl>
    <FormLabel htmlFor="email" id="email-label">
      Email address
    </FormLabel>
    <Input id="email" />
    <FormHelperText>We'll never share your email.</FormHelperText>
  </FormControl>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const formControlComponent = {
  name: "Form Control",
  importer: `import {
  FormControl,
  FormLabel,
  FormHelperText,
} from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function FormControl() {
  return (
    <>
      <SEO title="FormControl" />
      <DocumentBuilder component={formControlComponent} />
    </>
  );
}
