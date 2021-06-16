import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { useBadgeClass } from "./styles";

interface IBadgeProps extends DefaultProps {
  /* The color of badge */
  color?: string;
  /* Controls badge appearance */
  variant?: "solid" | "light";
  /* The size of badge */
  size?: "sm" | "md";
  /* If `true` badge has shadow */
  hasShadow?: boolean;
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    IBadgeProps {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    color,
    variant = "light",
    className,
    size = "md",
    hasShadow = false,
    ...rest
  } = props;

  const classes = useBadgeClass({ variant, hasShadow, size });
  return (
    <span
      ref={ref}
      className={cx(classes, className)}
      data-color={color ? color : undefined}
      {...rest}
    />
  );
});

if (__DEV__) {
  Badge.displayName = "Badge";
}
