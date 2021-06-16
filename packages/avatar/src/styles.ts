import { cx } from "@vechaiui/utils";
import { createMemoClass } from "@vechaiui/theme";

export const useAvatarNameClass = createMemoClass((props) => {
  const sizes = {
    "2xs": "avatar-name-2xs",
    xs: "avatar-name-xs",
    sm: "avatar-name-sm",
    md: "avatar-name-md",
    lg: "avatar-name-lg",
    xl: "avatar-name-xl",
    "2xl": "avatar-name-2xl",
    "3xl": "avatar-name-3xl",
  };

  const className = cx("avatar-name", sizes[props.size]);

  return className;
});

export const useAvatarClass = createMemoClass((props) => {
  const sizes = {
    "2xs": "avatar-2xs",
    xs: "avatar-xs",
    sm: "avatar-sm",
    md: "avatar-md",
    lg: "avatar-lg",
    xl: "avatar-xl",
    "2xl": "avatar-2xl",
    "3xl": "avatar-3xl",
  };

  const classes = cx(
    "avatar",
    props.bordered && "avatar-bordered",
    sizes[props.size]
  );

  return classes;
});
