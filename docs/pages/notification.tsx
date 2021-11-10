import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const notificationPropTypes = [
  {
    property: "duration",
    type: ["number", "null"],
    default: 5000,
    values: [],
    description:
      "Duration before dismiss in milliseconds, or `null` to never dismiss.",
  },
  {
    property: "closeable",
    type: ["boolean"],
    default: false,
    values: [],
    description: "If `true` adds a close button to the toast.",
  },
  {
    property: "onClose",
    type: ["() => void"],
    default: "",
    values: [],
    description: "Callback function to close the toast.",
  },
  {
    property: "undoText",
    type: ["string"],
    default: "",
    values: [],
    description: "The undo text of the toast",
  },
  {
    property: "onUndo",
    type: ["() => void"],
    default: "",
    values: [],
    description: "Callback function to undo the toast.",
  },
  {
    property: "position",
    type: ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"],
    default: "bottom",
    values: [],
    description: "One of toasted-notes positions.",
  },
  {
    property: "title",
    type: ["string"],
    default: "",
    values: [],
    description: "The title of the toast",
  },
  {
    property: "description",
    type: ["string"],
    default: "",
    values: [],
    description: "The description of the toast",
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
  {
    property: "closeIcon",
    type: ["React.ElementType"],
    default: "",
    values: [],
    description: "Custom close icon",
  },
];

const propList = [
  {
    name: "useNotification",
    value: "useNotification",
    propTypes: notificationPropTypes,
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "notification.tsx",
        code: `function App() {
  const notification = useNotification();

  const handleMessage = (status) => {
    notification({
      title: "Toast title",
      description: "Toast message goes here.",
      status: status,
      position: "top",
      undoText: "Undo",
      onUndo: () => {},
    });
  };

  return (
    <>
      <div className="flex items-center w-full p-8 space-x-4">
        <Button onClick={() => handleMessage()}>Click me</Button>
        <Button onClick={() => handleMessage("info")}>Info</Button>
        <Button onClick={() => handleMessage("success")}>Success</Button>
        <Button onClick={() => handleMessage("error")}>Error</Button>
        <Button onClick={() => handleMessage("warning")}>Warning</Button>
      </div>
    </>
  );
}`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const notificationComponent = {
  name: "Notification",
  importer: `import { useNotification } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Notification() {
  return (
    <>
      <SEO
        title="Tailwind CSS Notification"
        description="A way of informing the user of important changes in a prominent way."
      />
      <DocumentBuilder component={notificationComponent} />
    </>
  );
}
