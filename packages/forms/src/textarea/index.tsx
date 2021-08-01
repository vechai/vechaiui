import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { IInputProps, OmittedTypes } from "../input/input";
import { useInputClass } from "../input/styles";
import { useFormControl } from "../form-control";

type TextareaHTMLAttributes<T = HTMLTextAreaElement> = Omit<
  React.TextareaHTMLAttributes<T>,
  OmittedTypes
>;

export type TextareaProps<T = HTMLTextAreaElement> = IInputProps<T> &
  TextareaHTMLAttributes<T> &
  React.RefAttributes<T>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      size = "md",
      variant = "outline",
      color = "primary",
      as: Comp = "textarea",
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedby,
      className,
      id,
      ...rest
    } = props;
    const { readOnly, disabled, invalid, required, ...formControl } = useFormControl(props);
    const classes = useInputClass({ size, disabled, variant });
    
    return (
      <Comp
        ref={ref}
        readOnly={readOnly}
        aria-readonly={readOnly}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        aria-invalid={invalid}
        required={required}
        aria-required={required}
        aria-describedby={ariaDescribedby}
        data-color={color ? color : undefined}
        className={cx("form-textarea", classes, className)}
        id={id || formControl.id}
        {...rest}
      />
    );
  }
);

if (__DEV__) {
  Textarea.displayName = "Textarea";
}
