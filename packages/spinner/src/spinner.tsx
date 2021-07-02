import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import useSpinClass from "./styles";

export interface ISpinProps extends DefaultProps {
  /* Size of the spinner */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface SpinProps
  extends React.HTMLAttributes<SVGSVGElement>,
    ISpinProps {}

export const Spinner = React.forwardRef<SVGSVGElement, SpinProps>(
  (props, ref) => {
    const { size = "sm", className, ...rest } = props;
    const classes = useSpinClass({ size });

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className={cx(classes, className)}
        fill="none"
        viewBox="0 0 66 66"
        {...rest}
      >
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          stroke="currentColor"
          strokeWidth="10"
          className="opacity-30"
        />
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          stroke="currentColor"
          strokeDasharray="40, 134"
          strokeDashoffset="325"
          strokeLinecap="round"
          strokeWidth="10"
          className="opacity-70"
        />
      </svg>
    );
  }
);

if (__DEV__) {
  Spinner.displayName = "Spinner";
}
