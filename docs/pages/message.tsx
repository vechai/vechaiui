import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const messagePropTypes = [
  {
    property: "duration",
    type: ["number", "null"],
    default: 5000,
    values: [],
    description:
      "Duration before dismiss in milliseconds, or `null` to never dismiss.",
  },
  {
    property: "position",
    type: ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"],
    default: "bottom",
    values: [],
    description: "One of toasted-notes positions.",
  },
  {
    property: "message",
    type: ["string"],
    default: "",
    values: [],
    description: "The message of the toast",
  },
  {
    property: "status",
    type: ["info", "success", "error", "warning"],
    default: "",
    values: ["info", "success", "error", "warning"],
    description: "The status of the toast",
  },
  {
    property: "icon",
    type: ["React.ElementType"],
    default: "",
    values: [],
    description: "Custom icon",
  },
];

const propList = [
  {
    name: "useMessage",
    value: "useMessage",
    propTypes: messagePropTypes,
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "message.tsx",
        code: `function App() {
  const message = useMessage();

  const handleMessage = (status) => {
    message({
      message: "Toast message goes here.",
      status: status,
      position: "bottom-right",
    });
  };

  return (
    <div className="flex items-center w-full p-8 space-x-4">
      <Button onClick={() => handleMessage()}>Click me</Button>
      <Button onClick={() => handleMessage("info")}>Info</Button>
      <Button onClick={() => handleMessage("success")}>Success</Button>
      <Button onClick={() => handleMessage("error")}>Error</Button>
      <Button onClick={() => handleMessage("warning")}>Warning</Button>
    </div>
  );
}`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const messageComponent = {
  name: "Message",
  importer: `import { useMessage } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Message() {
  return (
    <>
      <SEO
        title="Tailwind CSS Message"
        description="A way of informing the user of important changes in a prominent way."
      />
      <DocumentBuilder component={messageComponent} />
    </>
  );
}
