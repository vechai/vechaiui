import * as React from "react";

import { Button as InternalButton, ButtonProps } from "./button";
import { ButtonGroup, ButtonGroupProps } from "./button-group";
import { IconButton, IconButtonProps } from "./icon-button";
interface Button
  extends React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  > {
  Group: typeof ButtonGroup;
}

const Button = InternalButton as Button;

Button.Group = ButtonGroup;

export type { ButtonProps, ButtonGroupProps, IconButtonProps };

export { Button, ButtonGroup, IconButton };
