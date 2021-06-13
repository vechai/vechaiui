import { createMemoClass } from "@vechaiui/theme";
import { cx } from "@vechaiui/utils";
var sizes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12"
};
export default createMemoClass(props => {
  var className = cx("animate-spin", sizes[props.size]);
  return className;
});
//# sourceMappingURL=styles.js.map