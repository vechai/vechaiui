import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

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
  const { className, ...rest } = props;
  const classes = cx("form-error-message", className);

  return <div ref={ref} className={classes} {...rest} />;
});

if (__DEV__) {
    FormErrorMessage.displayName = "FormErrorMessage";
}
