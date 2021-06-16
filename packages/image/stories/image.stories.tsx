import { Image } from "../src";

export default {
  title: "Image",
  component: Image,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <Image
    htmlWidth={100}
    htmlHeight={100}
    className="object-cover"
    src="https://bit.ly/dan-abramov"
  />
);
