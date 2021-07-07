import * as React from "react";

import {
  Breadcrumb as InternalBreadcrumb,
  BreadcrumbProps,
  BreadcrumbItem,
  BreadcrumbItemProps,
  BreadcrumbLink,
  BreadcrumbLinkProps,
  BreadcrumbSeparator,
  BreadcrumbSeparatorProps,
} from "./breadcrumb";

interface Breadcrumb
  extends React.ForwardRefExoticComponent<
    BreadcrumbProps & React.RefAttributes<HTMLElement>
  > {
  Item: typeof BreadcrumbItem;
  Link: typeof BreadcrumbLink;
  Separator: typeof BreadcrumbSeparator;
}

const Breadcrumb = InternalBreadcrumb as Breadcrumb;

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
Breadcrumb.Separator = BreadcrumbSeparator;

export type {
  BreadcrumbProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbSeparatorProps,
};

export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
};
