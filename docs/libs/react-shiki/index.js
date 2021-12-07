import { useCallback, useEffect, useMemo, useRef } from "react";
import { getHighlighter, setCDN } from "shiki";

import useForceUpdate from "./useForceUpdate";

setCDN("https://unpkg.com/shiki@0.9.7/");

const defaultToTokens = (code) => {
  const tokens = code
    .split("\n")
    .map((line) => (!line ? [] : [{ content: line }]));
  return tokens;
};

export default function useShiki(props = {}) {
  const highlighter = useRef(null);
  const { language, code } = props;
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    async function fetchHljs() {
      const hljs = await getHighlighter({
        theme: "material-ocean",
        langs: ["tsx"],
      });

      highlighter.current = hljs;
      forceUpdate();
    }

    if (highlighter.current) return;

    fetchHljs();
  }, []);

  const tokens = useMemo(
    () =>
      highlighter.current && language !== "text"
        ? highlighter.current.codeToThemedTokens(code, language, null, {
            includeExplanation: false,
          })
        : defaultToTokens(code),
    [code, language, highlighter.current]
  );

  const getLineProps = useCallback(
    ({ key, className, style, line, ...rest }) => {
      const output = {
        ...rest,
        className: "token-line",
        style: undefined,
        key: undefined,
      };

      if (style !== undefined) {
        output.style =
          output.style !== undefined ? { ...output.style, ...style } : style;
      }

      if (key !== undefined) output.key = key;
      if (className) output.className += ` ${className}`;

      return output;
    },
    []
  );

  const getTokenProps = useCallback(
    ({ key, className, style, token, ...rest }) => {
      const output = {
        ...rest,
        className: `token`,
        children: token.content,
        style: {
          ...token.style,
          color: token.color ? token.color : "",
        },
        key: undefined,
      };

      if (style !== undefined) {
        output.style =
          output.style !== undefined ? { ...output.style, ...style } : style;
      }

      if (key !== undefined) output.key = key;
      if (className) output.className += ` ${className}`;

      return output;
    },
    []
  );

  return {
    tokens,
    className: `shiki-code language-${language}`,
    style: {
      //   color: themeData.fg,
      //   backgroundColor: themeData.bg,
    },
    getLineProps,
    getTokenProps,
  };
}
