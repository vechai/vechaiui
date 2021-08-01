import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage } from "../src";

export default {
  title: "FormControl",
  component: FormControl,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <FormControl id="email">
    <FormLabel>
      Email address
    </FormLabel>
    <Input placeholder="jon@gmail.com" />
    <FormHelperText>We'll never share your email.</FormHelperText>
  </FormControl>
);

export const required = () => (
  <FormControl id="first-name" required>
    <FormLabel>
      First name
    </FormLabel>
    <Input placeholder="Enter your first name." aria-describedby="first-name-error" />
    <FormErrorMessage>First name is required!</FormErrorMessage>
  </FormControl>
);
