import { Link, LinkProps } from "@vechaiui/link";
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { cloneElement } from "react";

export interface BreadcrumbSeparatorProps extends DefaultProps, React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const BreadcrumbSeparator = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      role="presentation"
      className={cx("breadcrumb-separator", className)}
      {...props}
    />
  );
});

if (__DEV__) {
  BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
}

interface BreadcrumbLinkProps extends LinkProps {
  /**
   * If `true`, indicates that the breadcrumb item is active, adds
   * `aria-current=page` and renders a `span`
   */
  currentPage?: boolean;
}

export type { BreadcrumbLinkProps }

const BreadcrumbLink = React.forwardRef<any, any>(
  ({ currentPage, ...props }, ref) => {
    const Comp = currentPage ? "span" : Link;

    return (
      <Comp ref={ref} aria-current={currentPage ? "page" : undefined} {...props} />
    );
  }
);

if (__DEV__) {
  BreadcrumbLink.displayName = "BreadcrumbLink";
}

export interface BreadcrumbItemProps extends BreadcrumbProps {
  /**
   * If `true`, indicates that the breadcrumb item is active, adds
   * `aria-current=page` and renders a `span`
   */
  currentPage?: boolean;
  lastChild?: boolean;
}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  (props, ref) => {
    const {
      currentPage,
      separator,
      lastChild,
      addSeparator,
      children,
      className,
      ...rest
    } = props;

    const validChildren = getValidChildren(children);
    const clones = validChildren.map((child) => {
      if (child.type === BreadcrumbLink) {
        return cloneElement(child, { currentPage });
      }

      if (child.type === BreadcrumbSeparator) {
        return cloneElement(child, {
          children: child.props.children || separator,
        });
      }

      return child;
    });

    return (
      <li ref={ref} className={cx("breadcrumb-item", className)} {...rest}>
        {clones}
        {!lastChild && addSeparator && (
          <BreadcrumbSeparator children={separator} />
        )}
      </li>
    );
  }
);

interface IBreadcrumbProps extends DefaultProps {
  /* The visual separator between each breadcrumb item */
  separator?: string | React.ReactElement;
  /* Add the breadcrumb separator automatically */
  addSeparator?: boolean;
  /* React Node */
  children?: React.ReactNode;
}

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    IBreadcrumbProps {}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (props, ref) => {
    const {
      children,
      addSeparator = true,
      separator = "/",
      className,
      ...rest
    } = props;
    const validChildren = getValidChildren(children);
    const clones = validChildren.map((child, index) => {
      return cloneElement(child, {
        addSeparator,
        separator,
        lastChild: validChildren.length === index + 1,
      });
    });

    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cx("breadcrumb", className)}
        {...rest}
      >
        <ol>{clones}</ol>
      </nav>
    );
  }
);

if (__DEV__) {
  Breadcrumb.displayName = "Breadcrumb";
}
export { Breadcrumb, BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator };
