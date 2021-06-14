import { Input } from "../src";
import { Check } from "./check";

export default {
  title: "Input",
  component: Input,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => <Input placeholder="jon@gmail.com" />;

export const size = () => (
  <div className="flex space-x-2">
    <Input placeholder="jon@gmail.com" size="xs" />
    <Input placeholder="jon@gmail.com" size="sm" />
    <Input placeholder="jon@gmail.com" size="md" />
    <Input placeholder="jon@gmail.com" size="lg" />
    <Input placeholder="jon@gmail.com" size="xl" />
  </div>
);

export const element = () => (
  <div className="flex w-full space-x-2">
    <Input.Group size="xs">
      <Input.LeftElement
        children="$"
        className="pointer-events-none text-neutral-300"
      />
      <Input placeholder="ben@gmail.com" />
      {/* <Input.RightElement
        children={<Check className="text-green-500" size={14} />}
      /> */}
    </Input.Group>
{/* 
    <Input.Group size="sm">
      <Input.LeftElement
        children="$"
        className="pointer-events-none text-neutral-300"
      />
      <Input placeholder="ben@gmail.com" />
      <Input.RightElement
        children={<Check className="text-green-500" size={14} />}
      />
    </Input.Group>

    <Input.Group size="md">
      <Input.LeftElement
        children="$"
        className="pointer-events-none text-neutral-300"
      />
      <Input placeholder="ben@gmail.com" />
      <Input.RightElement
        children={<Check className="text-green-500" size={16} />}
      />
    </Input.Group>

    <Input.Group size="lg">
      <Input.LeftElement
        children="$"
        className="pointer-events-none text-neutral-300"
      />
      <Input placeholder="ben@gmail.com" />
      <Input.RightElement
        children={<Check className="text-green-500" size={24} />}
      />
    </Input.Group>

    <Input.Group size="xl">
      <Input.LeftElement
        children="$"
        className="pointer-events-none text-neutral-300"
      />
      <Input placeholder="ben@gmail.com" />
      <Input.RightElement
        children={<Check className="text-green-500" size={32} />}
      />
    </Input.Group> */}
  </div>
);
