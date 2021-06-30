import { cx } from "@vechaiui/react";
import * as React from "react";

import Editor from "@libs/react-codex";
import { Highlight } from "./highlight";

export function Code({ className, ...rest }: any) {
  return (
    <Editor
      tabSize={2}
      highlight={(props: any) => <Highlight {...props} />}
      language="tsx"
      className={cx(
        "font-mono dark group text-sm leading-6 overflow-hidden",
        className
      )}
      lineWrap={false}
      lineNumber
      {...rest}
    />
  );
}
