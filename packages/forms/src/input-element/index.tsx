import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { InputProps } from "../input/input";

type Placement = "left" | "right";

interface IInputElementProps extends DefaultProps {
  /* Placement of the input element */
  placement?: Placement;
  /* Size of the input element */
  size?: InputProps["size"];
  /* React node */
  children?: React.ReactNode;
  /* */
  disabledPointerEvents?: boolean;
}

const inputSizes = {
  xl: "form-input-element-xl",
  lg: "form-input-element-lg",
  md: "form-input-element-md",
  sm: "form-input-element-sm",
  xs: "form-input-element-xs",
};

export interface InputElementProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IInputElementProps {}

const InputElement = React.forwardRef<HTMLDivElement, InputElementProps>(
  (
    {
      size,
      children,
      placement = "left",
      disabledPointerEvents = false,
      className,
      ...props
    },
    ref
  ) => {
    const sizeClass = inputSizes[size!];
    const placementProp = { [placement]: "0" };

    return (
      <div
        ref={ref}
        className={cx(
          "form-input-element",
          sizeClass,
          disabledPointerEvents && "pointer-events-none",
          className
        )}
        style={placementProp}
        {...props}
      >
        {children}
      </div>
    );
  }
);

if (__DEV__) {
  InputElement.displayName = "InputElement";
}

export const InputLeftElement = React.forwardRef<HTMLDivElement, InputElementProps>(
  (props, ref) => <InputElement ref={ref} placement="left" {...props} />
);

if (__DEV__) {
  InputLeftElement.displayName = "InputLeftElement";
}

export const InputRightElement = React.forwardRef<HTMLDivElement, InputElementProps>(
  (props, ref) => <InputElement ref={ref} placement="right" {...props} />
);

if (__DEV__) {
  InputRightElement.displayName = "InputRightElement";
}