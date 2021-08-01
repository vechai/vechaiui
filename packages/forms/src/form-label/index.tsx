import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { useFormControl } from "../form-control";

interface IFormLabelProps extends DefaultProps {
  disabled?: boolean;
  children?: React.ReactNode;
  htmlFor?: string;
}

export interface FormLabelProps
  extends React.HTMLAttributes<HTMLLabelElement>,
    IFormLabelProps {}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  (props, ref) => {
    const { children, className, htmlFor, id, ...rest } = props;
    const formControl = useFormControl(rest);

    const classes = cx(
      "form-label",
      formControl.disabled && "form-label-disabled",
      className
    );

    return (
      <label
        ref={ref}
        className={classes}
        htmlFor={htmlFor || formControl.id}
        id={id || formControl.labelId}
        {...rest}
      >
        {children}
        {formControl.required && <RequiredIndicator />}
      </label>
    );
  }
);

if (__DEV__) {
  FormLabel.displayName = "FormLabel";
}

export const RequiredIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  const { className, ...rest } = props;
  const classes = cx("form-required-indicator", className);

  return (
    <span
      ref={ref}
      className={classes}
      aria-hidden="true"
      children="*"
      {...rest}
    />
  );
});

if (__DEV__) {
  RequiredIndicator.displayName = "RequiredIndicator";
}
