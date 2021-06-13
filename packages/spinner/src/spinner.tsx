import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import useSpinClass from "./styles";

export interface ISpinProps extends DefaultProps {
  /* Set the spinner color */
  color?: string;
  /* Size of the spinner */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface SpinProps
  extends React.HTMLAttributes<SVGSVGElement>,
    ISpinProps {}

export const Spinner = React.forwardRef<SVGSVGElement, SpinProps>((props, ref) => {
  const { color = "currentColor", size = "sm", className, ...rest } = props;
  const classes = useSpinClass({ size });

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={cx(classes, className)}
      {...rest}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
});

if (__DEV__) {
  Spinner.displayName = 'Spinner';
}
