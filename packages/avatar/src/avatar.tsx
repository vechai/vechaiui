import { useImage } from "@vechaiui/image";
import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

import { useAvatarClass, useAvatarNameClass } from "./styles";

interface IAvatarProps extends DefaultProps {
  /* The name of the person in the avatar. */
  name?: string;
  /* The border around of the avatar. */
  bordered?: boolean;
  /* The badge at the bottom right corner of the avatar. */
  children?: React.ReactNode;
  /* The image url of the `Avatar` */
  src?: string;
  /* The image set url of the `Avatar` */
  srcSet?: string;
  /* Defines loading strategy */
  loading?: "eager" | "lazy";
  /* Function called when image failed to load */
  onError?: () => void;
  /* Function to get the initials to display */
  getInitials?: (name: string) => string;
  /* */
  isFullName?: boolean;
  /* The size of the avatar. */
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

const getInitials = (name: string) => {
  let [firstName, lastName] = name.split(" ");

  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  } else {
    return firstName.charAt(0);
  }
};

interface AvatarNameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<
      IAvatarProps,
      "name" | "getInitials" | "isFullName" | "size" | "className"
    > {}

const AvatarName = ({
  name,
  isFullName,
  className,
  size,
  ...props
}: AvatarNameProps) => {
  const avatarNameClasses = useAvatarNameClass({ size });
  return (
    <div
      className={cx(avatarNameClasses, className)}
      aria-label={name}
      {...props}
    >
      {name ? (isFullName ? name : getInitials(name)) : null}
    </div>
  );
};

if (__DEV__) {
  AvatarName.displayName = "AvatarName";
}

interface DefaultAvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  "aria-label"?: string;
}

const DefaultAvatar = ({ className, ...props }: DefaultAvatarProps) => (
  <div className={cx("w-full h-full", className)} {...props}>
    <svg fill="#fff" viewBox="0 0 128 128" role="img">
      <g>
        <path d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z" />
        <path d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24" />
      </g>
    </svg>
  </div>
);

if (__DEV__) {
  DefaultAvatar.displayName = "DefaultAvatar";
}

const sizes = {
  "2xs": 4,
  xs: 5,
  sm: 6,
  md: 7,
  lg: 8,
  xl: 10,
  "2xl": 12,
  "3xl": 16,
  full: "full",
};

const baseSizes = {
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
};

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onError">,
    IAvatarProps {
  iconLabel?: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    props,
    ref
  ) => {
    const {
      size = "md",
      bordered,
      name,
      isFullName,
      src,
      children,
      className,
      style,
      onError,
      ...rest
    } = props;

    const classes = useAvatarClass({
      size,
      bordered,
    });

    const status = useImage({ src, onError });
    const hasLoaded = status === "loaded";

    const sizeKey = sizes[size];
    const _size = baseSizes[sizeKey];
    const fontSize = `calc(${_size} / 2.5)`;

    const renderChildren = () => {
      if (src && hasLoaded) {
        return (
          <img
            className="object-cover w-full h-full rounded-full"
            src={src}
            alt={name}
          />
        );
      }

      if (src && !hasLoaded) {
        if (name) {
          return <AvatarName size={size} name={name} isFullName={isFullName} />;
        } else {
          return <DefaultAvatar aria-label={name} />;
        }
      }

      if (!src && name) {
        return <AvatarName size={size} name={name} isFullName={isFullName} />;
      }

      return <DefaultAvatar aria-label={name} />;
    };

    return (
      <div
        ref={ref}
        className={cx(classes, className)}
        style={{
          fontSize,
          lineHeight: _size,
          ...style,
        }}
        {...rest}
      >
        {renderChildren()}
        {children}
      </div>
    );
  }
);

if (__DEV__) {
  Avatar.displayName = "Avatar";
}