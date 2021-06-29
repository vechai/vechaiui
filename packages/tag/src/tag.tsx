import { DefaultProps } from "@vechaiui/theme";
import { Icon, XIcon } from "@vechaiui/icon";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { useTagClass } from "./styles";

export interface TagCloseButtonProps
  extends DefaultProps,
    React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  iconClassName?: string;
}

// FIXME
export const TagCloseButton = React.forwardRef<
  HTMLButtonElement,
  TagCloseButtonProps
>(({ disabled, className, iconClassName, ...props }, ref) => (
  <button
    ref={ref}
    className={cx("tag-close-button", className)}
    disabled={disabled}
    aria-disabled={disabled}
    {...props}
  >
    <Icon as={XIcon} label="x" className={cx("w-3.5 h-3.5", iconClassName)} />
  </button>
));

if (__DEV__) {
  TagCloseButton.displayName = "TagCloseButton";
}

export interface TagLabelProps
  extends DefaultProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const TagLabel: React.FC<TagLabelProps> = ({ className, ...props }) => (
  <span className={cx(className)} {...props} />
);

if (__DEV__) {
  TagLabel.displayName = "TagLabel";
}

interface ITagProps extends DefaultProps {
  /* The color of tag */
  color?: string;
  /* Controls tag appearance */
  variant?: "outline" | "solid" | "light";
  /* The size of tag */
  size?: "sm" | "md" | "lg" | "xl";
}

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ITagProps {}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    variant = "outline",
    size = "md",
    color = "",
    className,
    ...rest
  } = props;
  const classes = useTagClass({ variant, size });

  return (
    <div
      ref={ref}
      data-color={color ? color : undefined}
      className={cx(classes, className)}
      {...rest}
    />
  );
});

if (__DEV__) {
  Tag.displayName = "Tag";
}
