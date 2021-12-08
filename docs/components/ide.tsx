import { Icon, cx } from "@vechaiui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import * as Tabs from "@radix-ui/react-tabs";
import * as React from "react";
import { LiveProvider, LiveContext, LiveError } from "react-live";

import { Code } from "./code";
import { Preview } from "./preview";
import { File } from "./document-builder";
import scope from "./scope";

interface IDEProps {
  files: File[];
  lineNumber?: boolean;
  showTab?: boolean;
  codeBlock?: boolean;
  openEditor?: boolean;
}

export function IDE({
  files = [],
  lineNumber = true,
  showTab = true,
  codeBlock = false,
  openEditor = false,
}: IDEProps) {
  return (
    <LiveProvider code={files[0]?.code} scope={scope}>
      <div className="rounded-lg">
        {!codeBlock && <Preview />}
        <Editor
          files={files}
          lineNumber={lineNumber}
          showTab={showTab}
          openEditor={openEditor}
        />
      </div>
      <LiveError className="block p-4 mt-2 font-mono text-sm text-left text-white whitespace-pre-wrap bg-red-500 rounded-md" />
    </LiveProvider>
  );
}

interface EditorProps {
  files: File[];
  lineNumber?: boolean;
  showTab?: boolean;
  openEditor?: boolean;
}

function Editor({
  files,
  lineNumber,
  showTab,
  openEditor: _openEditor,
}: EditorProps) {
  const [openEditor, setOpenEditor] = React.useState(_openEditor);
  const [tabKey, setTabKey] = React.useState(files[0].name);

  const handleTabsChange = (name: string) => {
    setTabKey(name);
  };
  const { onChange } = React.useContext(LiveContext) as any;
  const currentFile = files.find((file: File) => file.name === tabKey) as File;

  return (
    <div
      className="border rounded-b-lg bg-neutral-700 border-neutral-200 dark:border-neutral-700"
      style={{
        background: "#0F111A",
        color: "#FFFFFF",
      }}
    >
      {showTab && (
        <Tabs.Root
          value={tabKey}
          onValueChange={handleTabsChange}
          className={cx("relative", !openEditor ? "rounded-b-lg" : "")}
        >
          <Tabs.List
            onClick={(e) => {
              if ((e.target as HTMLDivElement).getAttribute("role") === "tablist" || !openEditor) {
                setOpenEditor((prev) => !prev)
              }
            }}
            tabIndex={0}
            className={cx(
              "relative flex items-center border-b rounded-tr-lg hide-scroll border-neutral-700",
              !openEditor ? "rounded-b-lg" : ""
            )}
          >
            {files.map((file: File) => (
              <Tabs.Trigger
                key={file.name}
                value={file.name}
                className={cx(
                  "text-smm h-full cursor-base flex items-center -mb-px justify-center px-5 py-3 border-b-2 border-transparent font-medium text-neutral-300 !my-0",
                  !openEditor ? "rounded-b-lg" : "selected:border-primary-500"
                )}
              >
                {file.name}
              </Tabs.Trigger>
            ))}

            <span
              role="tablist"
              className={cx(
                "w-5 h-5 absolute right-2.5 top-2.5 rounded-full flex justify-center items-center text-primary-600",
                openEditor ? "bg-primary-200 bg-opacity-15" : "bg-transparent"
              )}
            >
              <Icon
                role="tablist"
                as={ChevronUpIcon}
                label="chevron-up"
                className={cx(
                  "w-4 h-4",
                  openEditor ? "transform rotate-180" : ""
                )}
              />
            </span>
          </Tabs.List>
        </Tabs.Root>
      )}

      {openEditor && (
        <div className="overflow-auto max-h-96">
          <Code
            onChange={(editor: any) => {
              if (currentFile.readOnly) return;
              onChange?.(editor.getValue());
            }}
            value={currentFile.code || ""}
            readOnly={currentFile.readOnly}
            className="rounded-b-lg bg-neutral-900"
            lineNumber={lineNumber}
            showClipBoard={true}
            style={{
              background: "#0F111A",
              color: "#FFFFFF",
              caretColor: "#ffcb6b",
            }}
          />
        </div>
      )}
    </div>
  );
}
