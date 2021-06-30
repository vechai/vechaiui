import { LiveContext } from "react-live";

export function Preview() {
  return (
    <LiveContext.Consumer>
      {/* @ts-ignore */}
      {({ element: Element }) => {
        return (
          <div className="flex flex-col h-full border border-b-0 rounded-t-lg shadow-sm border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center h-8 pl-2 rounded-t-lg bg-neutral-200 dark:bg-neutral-700">
              <div className="text-smm">Output</div>
            </div>
            <div className="flex-1 h-full bg-base">
              {Element ? <Element /> : null}
            </div>
          </div>
        )
      }}
    </LiveContext.Consumer>
  );
}
