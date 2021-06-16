import { Kbd } from "../src";

export default {
  title: "Kbd",
  component: Kbd,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-6">
    <Kbd>⌘</Kbd>
    <Kbd>shift</Kbd>
    <Kbd>.</Kbd>
  </div>
);
