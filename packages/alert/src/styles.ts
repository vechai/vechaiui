import { cx } from "@vechaiui/utils";
import { createMemoClass } from "@vechaiui/theme";

const variantClasses = {
  subtle: "alert-subtle",
  solid: "alert-solid",
  "left-accent": "alert-left-accent",
};

export const useAlertCloseButton = createMemoClass(() => {
  return cx("alert-close-button");
});

export const useAlertClass = createMemoClass((props) => {
  return cx("alert", variantClasses[props.variant]);
});
