import { cx } from "@vechaiui/utils";
import { createMemoClass } from "@vechaiui/theme";

const variants = {
  solid: "tag-solid",
  outline: "tag-outline",
  light: "tag-light",
};

const sizes = {
  sm: "tag-sm",
  md: "tag-md",
  lg: "tag-lg",
  xl: "tag-xl",
};

export const useTagClass = createMemoClass((props) => {
  return cx("tag", sizes[props.size], variants[props.variant]);
});
