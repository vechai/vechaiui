import { Textarea } from "../src";

export default {
  title: "Textarea",
  component: Textarea,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => <Textarea placeholder="jon@gmail.com" />;

export const disabled = () => <Textarea disabled placeholder="jon@gmail.com" />;

export const invalid = () => <Textarea invalid placeholder="jon@gmail.com" />;

export const colored = () => (
  <Textarea placeholder="jon@gmail.com" color="orange" />
);
