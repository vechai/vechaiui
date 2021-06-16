import { Badge } from "../src";

export default {
  title: "Badge",
  component: Badge,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-2">
    <Badge>1</Badge>
    <Badge variant="solid">1</Badge>
    <Badge color="primary">1</Badge>
    <Badge color="primary" variant="solid">1</Badge>
  </div>
);

export const size = () => (
  <div className="flex space-x-2">
    <Badge size="sm">1</Badge>
    <Badge size="sm" variant="solid">
      1
    </Badge>
  </div>
);

export const colored = () => (
  <div className="flex space-x-2">
    <Badge color="orange">1</Badge>
    <Badge color="orange" variant="solid">
      1
    </Badge>
  </div>
);
