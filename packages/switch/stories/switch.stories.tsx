import { FormControl, FormLabel } from "@vechaiui/forms";
import { Switch } from "../src";

export default {
  title: "Switch",
  component: Switch,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="space-x-2">
    <Switch />
    <Switch defaultChecked />
  </div>
);

export const disabled = () => (
  <div className="space-x-2">
    <Switch disabled />
    <Switch defaultChecked disabled />
  </div>
);

export const colored = () => (
  <div className="space-x-2">
    <Switch color="orange" />
    <Switch color="orange" defaultChecked />
  </div>
);

export const size = () => (
  <div className="space-x-2">
    <Switch size="sm" />
    <Switch size="md" />
    <Switch size="lg" />
    <Switch size="xl" />
  </div>
);

export const formControl = () => (
  <FormControl className="flex items-center">
    <FormLabel htmlFor="email-alerts" className="mb-0 mr-2">
      Enable email alerts?
    </FormLabel>
    <Switch id="email-alerts" />
  </FormControl>
);
