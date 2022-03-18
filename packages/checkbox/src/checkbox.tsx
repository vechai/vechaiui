import { useFormControl } from "@vechaiui/forms";
import { cx, useForkRef, __DEV__ } from "@vechaiui/utils";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { useEffect, useRef } from "react";

import { useCheckboxClass, useCheckboxLabelClass } from "./styles";

interface ICheckboxProps<T = HTMLInputElement> extends DefaultProps {
  /* Makes checkbox disabled */
  disabled?: React.InputHTMLAttributes<T>["disabled"];
  /* Makes checkbox invalid */
  invalid?: boolean;
  /* Makes checkbox required */
  required?: React.InputHTMLAttributes<T>["required"];
  /* Makes checkbox readOnly */
  readOnly?: React.InputHTMLAttributes<T>["readOnly"];
  /* Makes checkbox indeterminate */
  indeterminate?: boolean;
  /**
   * If `true`, the checkbox will be initially checked.
   */
  defaultChecked?: boolean;
  /**
   * If `true`, the checkbox will be checked.
   * You'll need to pass `onChange` to update it's value (since it's now controlled)
   */
  checked?: boolean;
  /* Checkbox id */
  id?: string;
  /* Checkbox name */
  name?: string;
  /* Checkbox value */
  value?: string | number;
  /* Set the checkbox color */
  color?: string;
  /* Size of the checkbox */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * A11y: A label that describes the input
   */
  "aria-label"?: string;
  /**
   * A11y: The id of the element that describes the input
   */
  "aria-describedby"?: string;
  /**
   * A11y: Refers to the id of the element that labels the checkbox element.
   */
  "aria-labelledby"?: string;
  /**
   * The children is the label to be displayed to the right of the checkbox.
   */
  children?: React.ReactNode;
  /**
   * The callback invoked when the checked state of the `Checkbox` changes..
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export type CheckboxProps = ICheckboxProps &
  React.HTMLAttributes<HTMLInputElement>;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      id,
      name,
      value,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedby,
      color = "primary",
      defaultChecked,
      checked,
      size = "md",
      onChange,
      indeterminate,
      children,
      className,
      ...rest
    } = props;

    const { disabled, invalid, readOnly } = useFormControl(props);

    const checkboxClasses = useCheckboxClass({
      size,
      disabled,
    });

    const checkboxLabelClasses = useCheckboxLabelClass({ size });

    const ownRef = useRef();
    const _ref = useForkRef(ownRef, ref);

    useEffect(() => {
      // @ts-ignore
      if (ownRef.current) {
        // @ts-ignore
        ownRef.current.indeterminate = Boolean(indeterminate);
      }
    }, [indeterminate, _ref]);

    return (
      <label
        className={cx(
          "inline-flex align-top items-center cursor-base",
          disabled && "cursor-not-allowed"
        )}
      >
        <input
          type="checkbox"
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedby}
          id={id}
          ref={_ref}
          name={name}
          value={value}
          onChange={readOnly ? undefined : onChange}
          defaultChecked={readOnly ? undefined : defaultChecked}
          checked={
            readOnly ? Boolean(checked) : defaultChecked ? undefined : checked
          }
          disabled={disabled}
          aria-disabled={disabled}
          readOnly={readOnly}
          aria-readonly={readOnly}
          aria-invalid={invalid}
          aria-checked={indeterminate ? "mixed" : checked}
          data-color={color ? color : undefined}
          className={cx(
            checkboxClasses,
            readOnly || disabled ? "opacity-80" : "opacity-100",
            className
          )}
          {...rest}
        />
        {children && (
          <span
            className={cx(
              checkboxLabelClasses,
              readOnly || disabled ? "opacity-40" : "opacity-100"
            )}
          >
            {children}
          </span>
        )}
      </label>
    );
  }
);

if (__DEV__) {
  Checkbox.displayName = "Checkbox";
}
