import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import VisuallyHidden from "@vechaiui/visually-hidden";
import * as React from "react";

import { QuestionCircleIcon } from "./core";

export interface IconProps extends DefaultProps {
  as?: React.ElementType;
  inline?: boolean;
  role?: string;
  color?: string;
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label: string;
}

export const Icon = React.forwardRef<any, IconProps>((props, ref) => {
  const {
    as: Comp = QuestionCircleIcon,
    inline = true,
    className,
    role = "presentation",
    label,
    ...rest
  } = props;

  return (
    <>
      <Comp
        ref={ref}
        className={cx(inline ? "icon-inline" : "icon-block", className)}
        role={role}
        aria-hidden={true}
        focusable={false}
        {...rest}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </>
  );
});

if (__DEV__) {
  Icon.displayName = "Icon";
}
