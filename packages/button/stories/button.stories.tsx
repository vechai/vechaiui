import { Button } from "../src";

export default {
  title: "Button",
  component: Button,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="space-x-2">
    <Button>Button</Button>
    <Button color="primary">Button</Button>
  </div>
);
