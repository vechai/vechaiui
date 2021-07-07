import * as React from "react";

import { Avatar as InternalAvatar, AvatarProps } from "./avatar";
import { AvatarGroup, AvatarGroupProps } from "./avatar-group";

interface Avatar
  extends React.ForwardRefExoticComponent<
    AvatarProps & React.RefAttributes<HTMLDivElement>
  > {
  Group: typeof AvatarGroup;
}

const Avatar = InternalAvatar as Avatar;

Avatar.Group = AvatarGroup;

export type { AvatarProps };
export type { AvatarGroupProps };

export { Avatar, AvatarGroup };
