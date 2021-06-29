import { DefaultProps } from "@vechaiui/theme";
import { omit, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { useImage, UseImageProps } from "./use-image";

interface INativeImageProps extends DefaultProps {
  /**
   * The native HTML `width` attribute to the passed to the `img`
   */
  htmlWidth?: string | number;
  /**
   * The native HTML `height` attribute to the passed to the `img`
   */
  htmlHeight?: string | number;
}

interface NativeImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    INativeImageProps {}

export type { NativeImageProps };

export const NativeImage = React.forwardRef(
  (props: NativeImageProps, ref: React.Ref<any>) => {
    const { htmlWidth, htmlHeight, alt, ...rest } = props;
    return (
      <img
        width={htmlWidth}
        height={htmlHeight}
        ref={ref}
        alt={alt}
        {...rest}
      />
    );
  }
);

if (__DEV__) {
  NativeImage.displayName = "NativeImage";
}

interface IImageProps extends Omit<NativeImageProps, "onError"> {
  fallbackSrc?: string;
  fallback?: React.ReactElement;
  loading?: "eager" | "lazy";
  ignoreFallback?: boolean;
  as?: React.ElementType;
}

interface ImageProps extends UseImageProps, IImageProps {}

export const Image = React.forwardRef<unknown, ImageProps>((props, ref) => {
  const {
    fallbackSrc,
    fallback,
    src,
    loading,
    ignoreFallback,
    crossOrigin,
    as: Comp = NativeImage,
    ...rest
  } = props;

  /**
   * Defer to native `img` tag if `loading` prop is passed
   * @see https://github.com/chakra-ui/chakra-ui/issues/1027
   */
  const shouldIgnore = loading != null || ignoreFallback;

  const status = useImage({
    ...props,
    ignoreFallback: shouldIgnore,
  });

  const shared = {
    ref,
    ...(shouldIgnore ? rest : omit(rest, ["onError", "onLoad"])),
  };

  if (status !== "loaded") {
    /**
     * If user passed a custom fallback component,
     * let's render it here.
     */
    if (fallback) return fallback;

    return <Comp src={fallbackSrc} {...shared} />;
  }

  return (
    <Comp src={src} crossOrigin={crossOrigin} loading={loading} {...shared} />
  );
});

export type { ImageProps };

if (__DEV__) {
  Image.displayName = "Image";
}
