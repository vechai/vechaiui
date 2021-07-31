import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

interface IFormHelperTextProps extends DefaultProps {
  children?: React.ReactNode;
}

export interface FormHelperTextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    IFormHelperTextProps {}

export const FormHelperText = React.forwardRef<
  HTMLParagraphElement,
  FormHelperTextProps
>((props, ref) => {
  const { className, ...rest } = props;
  const classes = cx("form-helper-text", className);

  return <p ref={ref} className={classes} {...rest} />;
});

if (__DEV__) {
  FormHelperText.displayName = "FormHelperText";
}
