import { ThemeProvider } from "@vechaiui/react";
import { useState } from "react";
import { withPerformance } from "storybook-addon-performance";

import "./styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withVechai = (StoryFn: Function) => {
  const [colorScheme, setColorScheme] = useState("light");
  return (
    <ThemeProvider colorScheme={colorScheme}>
      <div id="story-wrapper" className="space-y-4" style={{ minHeight: "100vh" }}>
        <div className="flex mb-4 justify-items-end">
          <button
            onClick={() =>
              setColorScheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            Change theme
          </button>
        </div>
        <StoryFn />
      </div>
    </ThemeProvider>
  );
};

export const decorators = [withVechai, withPerformance];
