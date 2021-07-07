import * as React from "react";

import { Checkbox as InternalCheckbox, CheckboxProps } from "./checkbox";
import { CheckboxGroup, CheckboxGroupProps } from "./checkbox-group";

interface Checkbox
  extends React.ForwardRefExoticComponent<
    CheckboxProps & React.RefAttributes<HTMLInputElement>
  > {
  Group: typeof CheckboxGroup;
}

const Checkbox = InternalCheckbox as Checkbox;

Checkbox.Group = CheckboxGroup;

export type { CheckboxProps, CheckboxGroupProps };

export { Checkbox, CheckboxGroup };
