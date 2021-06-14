import { ThemeProvider } from "@vechaiui/react";
import { withPerformance } from "storybook-addon-performance"

import "./styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withVechai = (StoryFn: Function) => {
  return (
    <ThemeProvider>
      <StoryFn />
    </ThemeProvider>
  );
};

export const decorators = [withVechai, withPerformance]

