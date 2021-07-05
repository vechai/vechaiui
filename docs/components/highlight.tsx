import * as React from "react";

import useShiki from "@libs/react-shiki";

import { ClipBoardButton } from "./clip-board-button";
import s from "./code.module.css";

export function Highlight({
  code,
  language,
  lineNumber,
  showClipBoard,
}: {
  code?: string;
  language?: string;
  lineNumber?: boolean;
  showClipBoard?: boolean;
}) {
  const { tokens, getLineProps, getTokenProps } = useShiki({
    code,
    language,
  });

  return (
    <div className="relative w-full h-full group dark">
      <code
        className={`relative dark language-${language}`}
        style={{
          fontFamily: "inherit",
          fontSize: "inherit",
          whiteSpace: "inherit",
          wordBreak: "inherit",
          overflowWrap: "inherit",
          lineHeight: "inherit",
        }}
      >
        <div className="flex flex-col">
          {tokens.map((line: any, i: number) => {
            if (i === tokens.length - 1 && line.length === 0) return null;

            return (
              <span
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: lineNumber ? s.lineNumber : "",
                })}
              >
                {line.length === 0 && <span>&#8203;</span>}
                {line.map((token: any, key: number) => (
                  <span
                    key={key}
                    {...getTokenProps({
                      token,
                      key,
                    })}
                  />
                ))}
              </span>
            );
          })}
        </div>
      </code>
      {showClipBoard && (
        <ClipBoardButton
          value={code}
          style={{
            top: "-4px",
          }}
          className="absolute z-10 opacity-0 -top-1 -right-4 group-hover:opacity-100"
        />
      )}
    </div>
  );
}
