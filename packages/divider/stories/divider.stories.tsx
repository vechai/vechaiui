import { Divider } from "../src";

export default {
  title: "Divider",
  component: Divider,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div>
    <Divider />
  </div>
);

export const orientation = () => (
  <div className="flex">
    <span>Part 1</span>
    <Divider orientation="vertical" />
    <span>Part 2</span>
  </div>
);

export const colored = () => (
  <div>
    <span>Part 1</span>
    <Divider className="border-red-200" />
    <span>Part 2</span>
  </div>
);
