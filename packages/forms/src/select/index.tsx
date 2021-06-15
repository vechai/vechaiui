import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { Input, InputProps } from "../input/input";

export const Select = React.forwardRef<HTMLSelectElement, InputProps>((props, ref) => {
  const { className, placeholder, children, ...rest } = props;
  return (
    <Input
      ref={ref}
      as="select"
      type=""
      className={cx("form-select", className)}
      {...rest}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </Input>
  );
});

if (__DEV__) {
  Select.displayName = "Select";
}
