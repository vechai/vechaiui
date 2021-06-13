import { Button } from "../src";

export default {
  title: "Button",
  component: Button,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <>
    <Button>Button</Button>
  </>
);
