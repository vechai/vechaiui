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

export const variant = () => (
  <div className="flex flex-col space-y-4">
    <Textarea placeholder="jon@gmail.com" />
    <Textarea placeholder="jon@gmail.com" variant="solid" />
  </div>
)

export const colored = () => (
  <Textarea placeholder="jon@gmail.com" color="orange" />
);
