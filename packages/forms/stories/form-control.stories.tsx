import { FormControl, FormLabel, Input, FormHelperText } from "../src";

export default {
  title: "FormControl",
  component: FormControl,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <FormControl>
    <FormLabel htmlFor="email" id="email-label">
      Email address
    </FormLabel>
    <Input id="email" />
    <FormHelperText>We'll never share your email.</FormHelperText>
  </FormControl>
);
