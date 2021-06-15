import { cx, __DEV__ } from "@vechaiui/utils";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";

interface LinkProps extends DefaultProps {
  /* Makes link disabled */
  disabled?: boolean;
  /* Makes link open in new tab */
  external?: boolean;
  /* The element or component to use in place of `a` */
  as?: React.ElementType;
  /* Action to perform when clicked */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  /* React node */
  children?: React.ReactNode;
}

export const Link = React.forwardRef<unknown, any>((props, ref) => {
  const {
    disabled,
    external,
    onClick,
    className,
    as: Comp = "a",
    ...rest
  } = props;
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : null;

  return (
    <Comp
      ref={ref}
      tabIndex={disabled ? -1 : undefined}
      aria-disabled={disabled}
      onClick={disabled ? (event: any) => event.preventDefault() : onClick}
      className={cx("link", disabled && "link-disabled", className)}
      {...externalProps}
      {...rest}
    />
  );
});

export type { LinkProps };

if (__DEV__) {
  Link.displayName = "Link";
}