import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import { twFile } from "@utils/tw";
import SEO from "@components/seo";

const alertPropTypes = [
  {
    property: "color",
    type: ["string"],
    default: 'primary',
    values: [],
    description: "The color of alert",
  },
  {
    property: "variant",
    type: ["subtle", "solid", "left-accent"],
    default: "subtle",
    values: ["subtle", "solid", "left-accent"],
    description: "Controls alert appearance",
  },
];

const propList = [
  {
    name: "Alert",
    value: "alert",
    propTypes: alertPropTypes,
  },
  {
    name: "Alert.CloseButton",
    value: "alert-close-button",
    propTypes: [],
  },
];

const demoList = [
  {
    name: "Variants",
    files: [
      {
        name: "alert.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Alert variant="solid">Flash message goes here.</Alert>

  <Alert variant="subtle">Flash message goes here.</Alert>

  <Alert variant="left-accent">Flash message goes here.</Alert>
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Adding color",
    files: [
      {
        name: "alert.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Alert variant="solid" color="orange">Flash message goes here.</Alert>

  <Alert variant="subtle" color="orange">Flash message goes here.</Alert>

  <Alert variant="left-accent" color="orange">Flash message goes here.</Alert>
</div>`,
        readOnly: false,
      },
      twFile
    ],
  },
  {
    name: "Closeable",
    files: [
      {
        name: "alert.tsx",
        code: `<div className="flex flex-col w-full p-8 space-y-4">
  <Alert variant="solid" className="alert-yellow">
    Flash message goes here.
    <Alert.CloseButton />
  </Alert>

  <Alert variant="subtle">
    Flash message goes here.
    <Alert.CloseButton />
  </Alert>

  <Alert variant="left-accent">
    Flash message goes here.
    <Alert.CloseButton />
  </Alert>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const alertComponent = {
  name: "Alert",
  importer: `import { Alert } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Alert() {
  return (
    <>
      <SEO 
        title="Tailwind CSS Alert"
        description="A way of informing the user of important changes in a prominent way."
      />
      <DocumentBuilder component={alertComponent} />;
    </>
  )
}
