import { DefaultProps } from "@vechaiui/theme";
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { Avatar, AvatarProps } from "./avatar";

interface IAvatarGroupProps extends DefaultProps {
  /**
   * The children of the avatar group.
   */
  children: React.ReactNode;
  /**
   * The maximum number of visible avatars
   */
  max?: number;
  /* Set all wrapped avatar size */
  size?: AvatarProps["size"];
}

export interface AvatarGroupProps
  extends IAvatarGroupProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  size,
  children,
  max,
  className,
  ...rest
}) => {
  const validChildren = getValidChildren(children);

  /**
   * get the avatars within the max
   */
  const childrenWithinMax = max ? validChildren.slice(0, max) : validChildren;

  /**
   * get the remaining avatar count
   */
  const excess = max != null && validChildren.length - max;

  /**
   * Reversing the children is a great way to avoid using zIndex
   * to overlap the avatars
   */
  const reversedChildren = childrenWithinMax.reverse();

  const clones = reversedChildren.map((child, index) => {
    let isFirstAvatar = index === 0;
    return React.cloneElement(child, {
      size,
      className: cx(child.props.className, isFirstAvatar ? "mr-0" : "-mr-3"),
      bordered: true,
    });
  });

  return (
    <div role="group" className={cx("avatar-group", className)} {...rest}>
      {excess > 0 && (
        <Avatar
          size={size}
          name={`+${excess}`}
          className="-ml-3"
          isFullName
          bordered
        />
      )}
      {clones}
    </div>
  );
};

if (__DEV__) {
  AvatarGroup.displayName = "AvatarGroup";
}
