import { Code } from "../src";

export default {
  title: "Code",
  component: Code,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-6">
    <Code>New Issue</Code>
    <Code>Cmd/Ctrl</Code>
  </div>
);
