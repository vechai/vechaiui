import { FormControl, FormHelperText, FormLabel } from "@vechaiui/forms";
import { Checkbox } from "../src";

export default {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="space-x-2">
    <Checkbox>Checkbox</Checkbox>
    <Checkbox defaultChecked>Checkbox</Checkbox>
  </div>
);

export const invalid = () => (
  <div className="space-x-2">
    <Checkbox invalid>Checkbox</Checkbox>
    <Checkbox invalid defaultChecked>
      Checkbox
    </Checkbox>
  </div>
);

export const colored = () => (
  <div className="space-x-2">
    <Checkbox color="orange">Checkbox</Checkbox>
    <Checkbox color="orange" defaultChecked>
      Checkbox
    </Checkbox>
  </div>
);

export const disabled = () => (
  <div className="space-x-2">
    <Checkbox disabled>Checkbox</Checkbox>
    <Checkbox disabled defaultChecked>
      Checkbox
    </Checkbox>
    <Checkbox readOnly>Checkbox</Checkbox>

    <Checkbox readOnly defaultChecked>
      Checkbox
    </Checkbox>
  </div>
);

export const size = () => (
  <div className="space-x-2">
    <Checkbox size="sm">Checkbox</Checkbox>
    <Checkbox size="md">Checkbox</Checkbox>
    <Checkbox size="lg">Checkbox</Checkbox>
    <Checkbox size="xl">Checkbox</Checkbox>
  </div>
);

export const group = () => (
  <div className="flex flex-col space-y-4">
    <Checkbox.Group
      className="space-x-4"
      inline
      defaultValue={["naruto", "kakashi"]}
    >
      <Checkbox value="naruto">Naruto</Checkbox>
      <Checkbox value="sasuke">Sasuke</Checkbox>
      <Checkbox value="kakashi">kakashi</Checkbox>
    </Checkbox.Group>

    <Checkbox.Group
      className="space-x-4"
      inline
      defaultValue={["naruto", "kakashi"]}
      color="orange"
    >
      <Checkbox value="naruto">Naruto</Checkbox>
      <Checkbox value="sasuke">Sasuke</Checkbox>
      <Checkbox value="kakashi">kakashi</Checkbox>
    </Checkbox.Group>
  </div>
);

export const formControl = () => (
  <FormControl>
    <FormLabel>Favorite Naruto Character</FormLabel>
    <Checkbox.Group
      className="space-x-4"
      inline
      defaultValue={["naruto", "kakashi"]}
    >
      <Checkbox value="naruto">Naruto</Checkbox>
      <Checkbox value="sasuke">Sasuke</Checkbox>
      <Checkbox value="kakashi">kakashi</Checkbox>
    </Checkbox.Group>
    <FormHelperText>Select only if you're a fan.</FormHelperText>
  </FormControl>
);
