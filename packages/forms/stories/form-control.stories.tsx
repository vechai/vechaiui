import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage } from "../src";

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
    <Input id="email" placeholder="jon@gmail.com" />
    <FormHelperText>We'll never share your email.</FormHelperText>
  </FormControl>
);

export const required = () => (
  <FormControl required>
    <FormLabel htmlFor="first-name" id="first-name-label">
      First name
    </FormLabel>
    <Input id="first-name" placeholder="Enter your first name." />
    <FormErrorMessage>First name is required!</FormErrorMessage>
  </FormControl>
);
