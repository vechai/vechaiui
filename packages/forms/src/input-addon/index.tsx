import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { InputProps } from "../input/input";

type Placement = "left" | "right";

export interface IInputAddonProps extends DefaultProps {
  /* Placement of the input addon */
  placement?: Placement;
  /* Size of the input addon */
  size?: InputProps["size"];
}

const _placement = {
  left: "form-input-addon-left",
  right: "form-input-addon-right",
};

const sizes = {
  xs: "form-input-addon-xs",
  sm: "form-input-addon-sm",
  md: "form-input-addon-md",
  lg: "form-input-addon-lg",
  xl: "form-input-addon-xl",
};

export interface InputAddonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IInputAddonProps {}

const InputAddon: React.FC<InputAddonProps> = ({
  placement = "left",
  size = "md",
  className,
  ...props
}) => {
  const classes = cx(
    "form-input-addon",
    sizes[size],
    _placement[placement],
    className
  );

  return <div className={classes} {...props} />;
};

if (__DEV__) {
  InputAddon.displayName = "InputAddon";
}

export const InputLeftAddon: React.FC<InputAddonProps> = (props) => (
  <InputAddon placement="left" {...props} />
);

if (__DEV__) {
  InputLeftAddon.displayName = "InputLeftAddon";
}

export const InputRightAddon: React.FC<InputAddonProps> = (props) => (
  <InputAddon placement="right" {...props} />
);

if (__DEV__) {
  InputRightAddon.displayName = "InputRightAddon";
}
