import { createMemoClass } from "@vechaiui/theme";
import { cx } from "@vechaiui/utils";

export const useButtonClass = createMemoClass((props) => {
  const variantClasses = {
    outline: "btn-outline",
    solid: "btn-solid",
    ghost: "btn-ghost",
    light: "btn-light",
    link: "btn-link",
  };
  
  const sizes = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
    xl: "btn-xl",
  };

  const classes = cx(
    "btn",
    sizes[props.size],
    variantClasses[props.variant],
    props.disabled && "btn-disabled"
  );

  return classes;
});
