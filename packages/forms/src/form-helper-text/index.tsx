import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { useFormControl } from "../form-control";
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
  const { className, id, ...rest } = props;
  const classes = cx("form-helper-text", className);
  const formControl = useFormControl({});

  return (
    <p
      ref={ref}
      className={classes}
      id={id || formControl.helpTextId}
      {...rest}
    />
  );
});

if (__DEV__) {
  FormHelperText.displayName = "FormHelperText";
}
