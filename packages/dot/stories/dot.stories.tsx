import { Dot } from "../src";

export default {
  title: "Dot",
  component: Dot,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-2">
    <Dot />
    <Dot bordered />
    <Dot color="primary" />
    <Dot color="primary" bordered />
    <Dot variant="outline" />
    <Dot variant="outline" color="primary" />
  </div>
);

export const colored = () => (
  <div className="flex space-x-2">
    <Dot color="orange" />
    <Dot variant="outline" color="orange" />
    <Dot color="orange" bordered />
  </div>
);

export const outline = () => (
  <div className="flex space-x-2">
    <Dot variant="outline" size="2xs" />
    <Dot variant="outline" size="xs" />
    <Dot variant="outline" size="sm" />
    <Dot variant="outline" size="md" />
    <Dot variant="outline" size="lg" />
    <Dot variant="outline" size="xl" />
    <Dot variant="outline" size="2xl" />
    <Dot variant="outline" size="3xl" />
  </div>
);

export const solid = () => (
  <div className="flex space-x-2">
    <Dot size="2xs" />
    <Dot size="xs" />
    <Dot size="sm" />
    <Dot size="md" />
    <Dot size="lg" />
    <Dot size="xl" />
    <Dot size="2xl" />
    <Dot size="3xl" />
  </div>
);
