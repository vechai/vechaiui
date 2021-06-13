import { createMemoClass } from "@vechaiui/theme";
import { cx } from "@vechaiui/utils";
var variantClasses = {
  outline: "btn-outline",
  solid: "btn-solid",
  ghost: "btn-ghost",
  light: "btn-light",
  link: "btn-link"
};
var sizes = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl"
};
export default createMemoClass(props => {
  var classes = cx("btn", sizes[props.size], variantClasses[props.variant], props.disabled && "btn-disabled");
  return classes;
});
//# sourceMappingURL=styles.js.map