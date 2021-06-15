import { createMemoClass } from "@vechaiui/theme";
import { cx } from "@vechaiui/utils";

export const useRadioLabelClass = createMemoClass((props) => {
  const sizes = {
    sm: "form-radio-label-sm",
    md: "form-radio-label-md",
    lg: "form-radio-label-lg",
    xl: "form-radio-label-xl",
  };

  const classes = cx("form-radio-label", sizes[props.size]);

  return classes;
});

export const useRadioClass = createMemoClass((props) => {
  const sizes = {
    sm: "form-radio-sm",
    md: "form-radio-md",
    lg: "form-radio-lg",
    xl: "form-radio-xl",
  };

  const classes = cx(
    "form-radio",
    sizes[props.size],
    props.disabled && "form-radio-disabled"
  );

  return classes;
});
