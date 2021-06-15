import { useId } from "@reach/auto-id";
import { DefaultProps } from "@vechaiui/theme";
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { cloneElement, useRef, useState } from "react";

import { CheckboxProps } from "./checkbox";

export interface CheckboxGroupProps extends DefaultProps {
  /**
   * The id of the checkbox group.
   */
  id?: CheckboxProps["id"];
  /**
   * The name of the checkbox group. This prop is passed to each checbox
   */
  name?: CheckboxProps["name"];
  /**
   * The content of the checkbox group. Must be the `Checkbox` component
   */
  children?: React.ReactNode;
  /**
   * The initial value of the checkbox group
   */
  defaultValue?: Array<CheckboxProps["value"]>;
  /**
   * The value of the checkbox group
   */
  value?: Array<CheckboxProps["value"]>;
  /**
   * The callback fired when any children Checkbox is checked or unchecked
   */
  onChange?: (value: Array<CheckboxProps["value"]>) => void;
  /**
   * If `true`, the checkboxes will aligned horizontally.
   */
  inline?: boolean;
  /* Size of all wrapped checkbox */
  size?: CheckboxProps["size"];
  /* Color of all wrapped checkbox */
  color?: CheckboxProps["color"];
}

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
    const {
      onChange,
      name,
      color,
      size,
      defaultValue,
      inline,
      value: valueProp,
      children,
      ...rest
    } = props;
    const [values, setValues] = useState(defaultValue || []);

    const { current: isControlled } = useRef(valueProp != null);
    const _values = isControlled ? valueProp : values;

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = event.target;
      let newValues;
      if (checked) {
        newValues = [...(_values || []), value];
      } else {
        newValues = (_values || []).filter((val) => val !== value);
      }

      !isControlled && setValues(newValues);
      onChange && onChange(newValues);
    };

    // If no name is passed, we'll generate a random, unique name
    const fallbackName = `checkbox-${useId()}`;
    const _name = name || fallbackName;

    const validChildren = getValidChildren(children);

    const clones = validChildren.map((child, index) => {
      return (
        <div
          key={index}
          className={cx(
            inline ? "inline-block" : "block",
            child.props.className
          )}
        >
          {cloneElement(child, {
            size: size,
            color: child.props.color || color,
            name: `${_name}-${index}`,
            onChange: _onChange,
            checked: (_values || []).includes(child.props.value),
          })}
        </div>
      );
    });

    return (
      <div role="group" ref={ref} {...rest}>
        {clones}
      </div>
    );
  }
);

if (__DEV__) {
  CheckboxGroup.displayName = "CheckboxGroup";
}
