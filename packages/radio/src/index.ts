import * as React from "react";

import { Radio as InternalRadio, RadioProps } from "./radio";
import { RadioGroup, RadioGroupProps } from "./radio-group";

interface Radio
  extends React.ForwardRefExoticComponent<
    RadioProps & React.RefAttributes<HTMLInputElement>
  > {
  Group: typeof RadioGroup;
}

const Radio = InternalRadio as Radio;

Radio.Group = RadioGroup;

export type { RadioProps, RadioGroupProps };

export { Radio, RadioGroup };
