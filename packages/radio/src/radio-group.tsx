import { useId } from "@reach/auto-id";
import { DefaultProps } from "@vechaiui/theme";
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { cloneElement, useImperativeHandle, useRef, useState } from "react";

import { RadioProps } from "./radio";

interface IRadioGroupProps extends DefaultProps {
  /**
   * The id of the radio group.
   */
  id?: string;
  /**
   * The name of the radio group. This prop is passed to each checbox
   */
  name?: string;
  /**
   * The content of the radio group. Must be the `Radio` component
   */
  children?: React.ReactNode;
  /**
   * The initial value of the radio group
   */
  defaultValue?: RadioProps["value"];
  /**
   * The value of the radio group
   */
  value?: RadioProps["value"];
  /* Size of all wrapped radio */

  size?: RadioProps["size"];
  /* Color of all wrapped radio */

  color?: RadioProps["color"];
  /**
   * The callback fired when any children Radio is checked or unchecked
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: RadioProps["value"]
  ) => void;
  /**
   * If `true`, the radio will aligned horizontally.
   */
  inline?: boolean;
}

type RadioGroupElement = {
  focus: () => void;
} | undefined;
export type RadioGroupProps = IRadioGroupProps;

export const RadioGroup = React.forwardRef<RadioGroupElement, RadioGroupProps>(
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
    const { current: isControlled } = useRef(valueProp != null);
    const [value, setValue] = useState(defaultValue || null);
    const _value = isControlled ? valueProp : value;

    const rootRef = useRef<HTMLDivElement>(null);

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setValue(event.target.value);
      }

      if (onChange) {
        onChange(event, event.target.value);
      }
    };

    // If no name is passed, we'll generate a random, unique name
    const fallbackName = `radio-${useId()}`;
    const _name = name || fallbackName;

    const validChildren = getValidChildren(children);

    const clones = validChildren.map((child, index) => {
      return (
        <div key={index} className={cx(inline ? "inline-block" : "block")}>
          {cloneElement(child, {
            size: child.props.size || size,
            color: child.props.color || color,
            name: _name,
            onChange: _onChange,
            checked: child.props.value === _value,
          })}
        </div>
      );
    });

    // Calling focus() on the radiogroup should focus on the selected option or first enabled option
    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          let input: HTMLInputElement | null = rootRef.current?.querySelector(
            "input:not(:disabled):checked"
          ) || null;

          if (!input) {
            input = rootRef.current?.querySelector("input:not(:disabled)") || null;
          }

          if (input) {
            input.focus();
          }
        },
      }),
      []
    );

    return (
      <div ref={rootRef} role="radiogroup" {...rest}>
        {clones}
      </div>
    );
  }
);

if (__DEV__) {
  RadioGroup.displayName = "RadioGroup";
}