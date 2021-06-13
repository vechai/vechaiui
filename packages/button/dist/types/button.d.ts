import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
export interface IButtonProps extends DefaultProps {
    loading?: boolean;
    disabled?: boolean;
    active?: boolean;
    loadingText?: string;
    type?: "button" | "reset" | "submit";
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    color?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Controls button appearance */
    variant?: "link" | "solid" | "outline" | "light" | "ghost" | "unstyled";
    children?: React.ReactNode;
}
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IButtonProps {
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
