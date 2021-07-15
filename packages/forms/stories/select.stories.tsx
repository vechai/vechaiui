import { Select } from "../src";

export default {
  title: "Select",
  component: Select,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <Select placeholder="Outline">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
);

export const disabled = () => (
  <Select disabled placeholder="Outline">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
);

export const invalid = () => (
  <Select invalid placeholder="Outline">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
);

export const colored = () => (
  <Select placeholder="Outline" color="orange">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
);

export const variant = () => (
  <div className="flex space-x-2">
    <Select placeholder="Outline">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>

    <Select placeholder="Outline" variant="solid">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
  </div>
);

export const size = () => (
  <div className="flex space-x-2">
    <Select placeholder="Outline" size="xs">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>

    <Select placeholder="Outline" size="sm">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>

    <Select placeholder="Outline" size="md">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>

    <Select placeholder="Outline" size="lg">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>

    <Select placeholder="Outline" size="xl">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
  </div>
);
