import { useFormControl } from "@vechaiui/forms";
import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import VisuallyHidden from "@vechaiui/visually-hidden";
import * as React from "react";

import { useSwitchClass, useSwitchBoxClass } from "./styles";

export interface SwitchProps<T = HTMLInputElement> extends DefaultProps {
  /* Makes switch disabled */
  disabled?: React.InputHTMLAttributes<T>["disabled"];
  /* Makes switch invalid */
  invalid?: boolean;
  /**
   * If `true`, the switch will be initially checked.
   */
  defaultChecked?: boolean;
  /**
   * If `true`, the switch will be checked.
   * You'll need to pass `onChange` to update it's value (since it's now controlled)
   */
  checked?: boolean;
  /**
   * The callback invoked when the checked state of the `switch` changes..
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /* Switch id */
  id?: string;
  /* Switch name */
  name?: string;
  /* Switch value */
  value?: string | number;
  /* Size of the switch */
  size?: "sm" | "md" | "lg" | "xl";
  /* Set the switch color */
  color?: string;
  /**
   * A11y: A label that describes the input
   */
  "aria-label"?: string;
  /**
   * A11y: The id of the element that describes the input
   */
  "aria-describedby"?: string;
  /**
   * A11y: Refers to the id of the element that labels the switch element.
   */
  "aria-labelledby"?: string;
  /**
   * The children is the label to be displayed to the right of the switch.
   */
  children?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      id,
      name,
      value,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      color = "primary",
      defaultChecked,
      checked,
      size = "md",

      onChange,
      children,
      className,
      ...rest
    } = props;

    const { disabled, invalid } = useFormControl(props);

    const switchClasses = useSwitchClass({
      size,
      disabled,
      checked,
    });

    const switchBoxClasses = useSwitchBoxClass({
      size,
      checked,
    });

    return (
      <label className="form-switch-label" {...rest}>
        <VisuallyHidden
          as="input"
          type="checkbox"
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          id={id}
          ref={ref}
          name={name}
          value={value}
          aria-invalid={invalid}
          defaultChecked={defaultChecked}
          onChange={onChange}
          checked={checked}
          data-disabled={disabled}
          disabled={disabled}
        />
        <div
          className={cx(switchClasses, className)}
          data-disabled={disabled}
          data-color={color ? color : undefined}
        >
          <div className={cx(switchBoxClasses)} />
        </div>
      </label>
    );
  }
);

if (__DEV__) {
  Switch.displayName = "Switch";
}
