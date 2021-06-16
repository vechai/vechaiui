import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { QuestionCircle } from "./core";

interface IconProps extends DefaultProps {
  as?: React.ElementType;
  inline?: boolean;
  role?: string;
  size?: string | number;
  color?: string;
}

export const Icon = React.forwardRef<any, IconProps>((props, ref) => {
  const {
    as: Comp = QuestionCircle,
    inline = true,
    className,
    role = "presentation",
    ...rest
  } = props;

  return (
    <Comp
      ref={ref}
      className={cx(inline ? "icon-inline" : "icon-block", className)}
      role={role}
      {...rest}
    />
  );
});

export type { IconProps };

if (__DEV__) {
  Icon.displayName = "Icon";
}
