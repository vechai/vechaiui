import { Highlight } from "./highlight";

function getLanguage(language: string) {
  const map: any = {
    bash: "text",
    tsx: "tsx",
    jsx: "tsx",
    js: "tsx",
  };

  return map[language] || "text";
}

export function CodeBlock({ children, showClipBoard = true }: any) {
  const language = getLanguage(
    children?.props?.className?.replace("language-", "") || ""
  );
  const lineNumber = language !== "text";
  const contentStyle = {
    paddingLeft: "1rem",
    paddingRight: "2rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    ...(lineNumber && {
      paddingLeft: "3.5rem",
    }),
  };

  return (
    <pre
      className="relative my-5 overflow-x-auto text-sm leading-relaxed rounded"
      style={{
        background: "#0F111A",
        ...contentStyle,
      }}
    >
      <Highlight
        code={children?.props?.children || ""}
        language={language}
        lineNumber={lineNumber}
        showClipBoard={showClipBoard}
      />
    </pre>
  );
}
