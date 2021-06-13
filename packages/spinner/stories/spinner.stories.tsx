import * as React from 'react';

import { Spinner } from "../src";

export default {
  title: "Spinner",
  component: Spinner,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <Spinner className="text-primary-500" />
);
