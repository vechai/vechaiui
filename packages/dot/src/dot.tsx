import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { useDotClass } from "./styles";

interface IDotProps extends DefaultProps {
  /* The color of dot */
  color?: string;
  /* Controls dot appearance */
  variant?: "outline" | "solid";
  /* The size of dot */
  size?: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /* If `true` dot has border */
  bordered?: boolean;
}

export interface DotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    IDotProps {}

export const Dot = React.forwardRef<HTMLSpanElement, DotProps>((props, ref) => {
  const {
    color,
    variant = "solid",
    className,
    size = "2xs",
    bordered = false,
    ...rest
  } = props;

  const classes = useDotClass({ variant, bordered, size });
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
  Dot.displayName = "Dot";
}
