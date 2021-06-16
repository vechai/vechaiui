import { Alert } from "../src";

export default {
  title: "Alert",
  component: Alert,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const variant = () => (
  <div className="flex flex-col space-y-4">
    <Alert variant="solid">Flash message goes here.</Alert>

    <Alert variant="subtle">Flash message goes here.</Alert>

    <Alert variant="left-accent">Flash message goes here.</Alert>
  </div>
);

export const colored = () => (
  <div className="flex flex-col space-y-4">
    <Alert color="orange" variant="solid">
      Flash message goes here.
    </Alert>

    <Alert color="orange" variant="subtle">
      Flash message goes here.
    </Alert>

    <Alert color="orange" variant="left-accent">
      Flash message goes here.
    </Alert>
  </div>
);

export const closeable = () => (
  <div className="flex flex-col space-y-4">
    <Alert variant="solid" className="alert-yellow">
      Flash message goes here.
      <Alert.CloseButton className="alert-close-button-yellow" />
    </Alert>

    <Alert variant="subtle">
      Flash message goes here.
      <Alert.CloseButton />
    </Alert>

    <Alert variant="left-accent">
      Flash message goes here.
      <Alert.CloseButton />
    </Alert>

    <Alert color="orange" variant="solid" className="alert-yellow">
      Flash message goes here.
      <Alert.CloseButton className="alert-close-button-yellow" />
    </Alert>

    <Alert color="orange" variant="subtle">
      Flash message goes here.
      <Alert.CloseButton />
    </Alert>

    <Alert color="orange" variant="left-accent">
      Flash message goes here.
      <Alert.CloseButton />
    </Alert>
  </div>
);
