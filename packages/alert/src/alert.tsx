import { cx, __DEV__ } from "@vechaiui/utils";
import { Icon, XIcon } from "@vechaiui/icon";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";

import { useAlertClass, useAlertCloseButton } from "./styles";

interface AlertContext {
  color?: string;
}

const AlertContext = React.createContext<AlertContext>({});

const useAlertContext = () => {
  const context = React.useContext(AlertContext);
  if (context === undefined) {
    throw new Error(
      "useAlertContext must be used within a AlertContextProvider"
    );
  }
  return context;
};

interface IAlertCloseButtonProps extends DefaultProps {}

export interface AlertCloseButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    IAlertCloseButtonProps {}

export const AlertCloseButton = React.forwardRef<
  HTMLButtonElement,
  AlertCloseButtonProps
>(({ className }, ref) => {
  const { color } = useAlertContext();
  const classes = useAlertCloseButton();

  return (
    <button
      ref={ref}
      data-color={color ? color : undefined}
      className={cx(classes, className)}
    >
      <Icon
        as={XIcon}
        label="x"
        className="inline-block w-4 h-4 text-current align-text-bottom fill-current"
      />
    </button>
  );
});

if (__DEV__) {
  AlertCloseButton.displayName = "AlertCloseButton";
}

interface IAlertProps extends DefaultProps {
  /* The color of the alert. */
  color?: string;
  /** Controls alert appearance */
  variant?: "subtle" | "solid" | "left-accent";
}

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IAlertProps {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const { color = "primary", variant = "subtle", className, ...rest } = props;
    const classes = useAlertClass({
      variant,
    });

    const context = { color };

    return (
      <AlertContext.Provider value={context}>
        <div
          role="alert"
          ref={ref}
          data-color={color ? color : undefined}
          className={cx(classes, className)}
          {...rest}
        />
      </AlertContext.Provider>
    );
  }
);

if (__DEV__) {
  Alert.displayName = "Alert";
}
