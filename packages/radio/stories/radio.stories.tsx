import { FormControl, FormHelperText, FormLabel } from "@vechaiui/forms";
import { Radio } from "../src";

export default {
  title: "Radio",
  component: Radio,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="space-x-2">
    <Radio name="basic">First</Radio>
    <Radio name="basic" defaultChecked>
      Second
    </Radio>
  </div>
);

export const invalid = () => (
  <div className="space-x-2">
    <Radio invalid name="invalid">
      First
    </Radio>
    <Radio invalid name="invalid" defaultChecked>
      Second
    </Radio>
  </div>
);

export const colored = () => (
  <div className="space-x-2">
    <Radio color="orange" name="colored">
      First
    </Radio>
    <Radio color="orange" name="colored" defaultChecked>
      Second
    </Radio>
  </div>
);

export const disabled = () => (
  <div className="space-x-2">
    <Radio disabled name="disabled">
      First
    </Radio>
    <Radio disabled name="disabled" defaultChecked>
      Second
    </Radio>

    <Radio readOnly name="readOnly">
      First
    </Radio>
    <Radio readOnly name="readOnly" defaultChecked>
      Second
    </Radio>
  </div>
);

export const size = () => (
  <div className="space-x-2">
    <Radio size="sm" name="size">
      Radio
    </Radio>
    <Radio size="md" name="size">
      Radio
    </Radio>
    <Radio size="lg" name="size">
      Radio
    </Radio>
    <Radio size="lg" name="size">
      Radio
    </Radio>
  </div>
);

export const group = () => (
  <div className="flex flex-col space-y-4">
    <Radio.Group defaultValue="2" className="space-x-4" inline>
      <Radio value="1">First</Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </Radio.Group>

    <Radio.Group defaultValue="2" className="space-x-4" inline color="orange">
      <Radio value="1">First</Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </Radio.Group>
  </div>
);

export const formControl = () => (
  <FormControl>
    <FormLabel>Favorite Naruto Character</FormLabel>
    <Radio.Group defaultValue="2" className="space-x-4" inline>
      <Radio value="1">First</Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </Radio.Group>
    <FormHelperText>Select only if you're a fan.</FormHelperText>
  </FormControl>
);
