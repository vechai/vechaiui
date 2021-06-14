import { DefaultProps } from "@vechaiui/theme";
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { Input, InputProps } from "../input/input";
import { InputLeftElement, InputRightElement } from "../input-element";
import { InputLeftAddon, InputRightAddon } from "../input-addon";

interface IInputGroupProps extends DefaultProps {
  /* Size of all wrapped input */
  size?: InputProps["size"];
  /* React node */
  children?: React.ReactNode;
}

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IInputGroupProps {}

const inputSizes = {
  xl: "12",
  lg: "10",
  md: "8",
  sm: "7",
  xs: "6",
};

const plSizes = {
  12: "pl-12",
  10: "pl-10",
  8: "pl-8",
  7: "pl-7",
  6: "pl-6",
};

const prSizes = {
  12: "pr-12",
  10: "pr-10",
  8: "pr-8",
  7: "pr-7",
  6: "pr-6",
};

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  (props, ref) => {
    const { children, className, size = "md", ...rest } = props;
    const height = inputSizes[size];
    let pl: string | undefined;
    let pr: string | undefined;

    let rl: string | undefined;
    let rr: string | undefined;

    const validChildren = getValidChildren(children);

    validChildren.forEach((child) => {
      if (child.type === InputLeftElement) {
        pl = plSizes[height];
      }
      if (child.type === InputRightElement) {
        pr = prSizes[height];
      }

      if (child.type === InputLeftAddon) {
        rl = "rounded-l-none";
      }
      if (child.type === InputRightAddon) {
        rr = "rounded-r-none";
      }
    });

    return (
      <div
        ref={ref}
        role="group"
        className={cx("form-input-group", className)}
        {...rest}
      >
        {validChildren.map((child) => {
          if (child.type === Input) {
            return React.cloneElement(child, {
              size,
              className: cx(pl, pr, rl, rr, child.props.className),
            });
          }
          return React.cloneElement(child, { size });
        })}
      </div>
    );
  }
);

if (__DEV__) {
  InputGroup.displayName = "InputGroup";
}
