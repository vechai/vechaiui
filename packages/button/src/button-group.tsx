import { DefaultProps } from "@vechaiui/theme";
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { ButtonProps } from "./button";

interface IButtonGroupProps extends DefaultProps {
  /**
   * If `true`, the borderRadius of button that are direct children will be altered
   * to look flushed together
   */
  attached?: boolean;
  /* Set all wrapped button will be disabled */
  disabled?: boolean;
  /* Size of all wrapped button */
  size?: ButtonProps["size"];
  /** Controls all wrapped button appearance */
  variant?: ButtonProps["variant"];
  /* Set all wrapped button color */
  color?: ButtonProps["color"];
  /* React node */
  children?: React.ReactNode;
}

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IButtonGroupProps {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const {
      size,
      color,
      variant,
      attached,
      disabled,
      children,
      className,
      ...rest
    } = props;

    const validChildren = getValidChildren(children);
    const clones = validChildren.map((child) => {
      return React.cloneElement(child, {
        size: size || child.props.size,
        color: child.props.color || color,
        variant: child.props.variant || variant,
        disabled: child.props.disabled || disabled,
      });
    });

    return (
      <div
        ref={ref}
        role="group"
        className={cx("btn-group", attached && "btn-group-attached", className)}
        {...rest}
      >
        {clones}
      </div>
    );
  }
);

if (__DEV__) {
  ButtonGroup.displayName = "ButtonGroup";
}
