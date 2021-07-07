import * as React from "react";

import {
  Tag as InternalTag,
  TagProps,
  TagCloseButton,
  TagCloseButtonProps,
  TagLabel,
  TagLabelProps,
} from "./tag";

interface Tag
  extends React.ForwardRefExoticComponent<
    TagProps & React.RefAttributes<HTMLDivElement>
  > {
  CloseButton: typeof TagCloseButton;
  Label: typeof TagLabel;
}

const Tag = InternalTag as Tag;

Tag.CloseButton = TagCloseButton;
Tag.Label = TagLabel;

export type { TagProps, TagLabelProps, TagCloseButtonProps };

export { Tag, TagLabel, TagCloseButton };
