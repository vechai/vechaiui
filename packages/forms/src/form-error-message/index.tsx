import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { useFormControl } from "../form-control";
interface IFormErrorMessageProps extends DefaultProps {
  children?: React.ReactNode;
}

export interface FormErrorMessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IFormErrorMessageProps {}

export const FormErrorMessage = React.forwardRef<
  HTMLParagraphElement,
  FormErrorMessageProps
>((props, ref) => {
  const { className, id, ...rest } = props;
  const classes = cx("form-error-message", className);
  const formControl = useFormControl({});

  return (
    <div
      ref={ref}
      className={classes}
      id={id || formControl.errorId}
      {...rest}
    />
  );
});

if (__DEV__) {
  FormErrorMessage.displayName = "FormErrorMessage";
}
