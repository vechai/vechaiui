import * as React from "react";

import {
  Alert as InternalAlert,
  AlertProps,
  AlertCloseButton,
  AlertCloseButtonProps,
} from "./alert";

interface Alert
  extends React.ForwardRefExoticComponent<
    AlertProps & React.RefAttributes<HTMLDivElement>
  > {
  CloseButton: typeof AlertCloseButton;
}

const Alert = InternalAlert as Alert;

Alert.CloseButton = AlertCloseButton;

export type { AlertProps, AlertCloseButtonProps };

export { Alert, AlertCloseButton };
