import { Button } from "@vechaiui/button";
import {
  Icon,
  InfoIcon,
  XIcon,
  XCricleIcon,
  CheckCircleIcon,
  ExclamationIcon,
} from "@vechaiui/icon";
import { createToast, useToastOptions } from "@vechaiui/toast";
import { cx as clsx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

const statuses = {
  info: {
    icon: InfoIcon,
    cx: "notification-icon-info",
    label: "info"
  },
  success: {
    icon: CheckCircleIcon,
    cx: "notification-icon-success",
    label: "check-circle",
  },
  error: {
    icon: XCricleIcon,
    cx: "notification-icon-error",
    label: "x-circle"
  },
  warning: {
    icon: ExclamationIcon,
    cx: "notification-icon-warning",
    label: "exclamationIcon",
  },
};

type OmittedTypes = "message";

export interface NotificationProps
  extends Omit<useToastOptions, OmittedTypes> { }

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (props, ref) => {
    const {
      title,
      description,
      className,
      status = "",
      onClose,
      icon: customIcon,
      closeIcon: customCloseIcon,
      closeable = true,
      onUndo,
      undoText = "Undo",
    } = props;
    const { icon, cx, label } = statuses[status] || {};

    return (
      <div ref={ref} className={clsx("notification", className)}>
        {((icon && cx) || customIcon) && (
          <span className={clsx("notification-icon", cx)}>
            {customIcon ? (
              customIcon
            ) : (
              <Icon label={label} as={customIcon || icon} className="w-5 h-5" />
            )}
          </span>
        )}
        <div className="notification-content">
          <span className="notification-content-title">{title}</span>
          <span className="notification-content-description">
            {description}
          </span>
        </div>
        <div className="notification-action">
          {onUndo && (
            <Button
              variant="link"
              color="primary"
              className="notification-action-undo"
              onClick={() => {
                onUndo();
              }}
            >
              {undoText}
            </Button>
          )}

          {closeable && (
            <button
              onClick={onClose}
              className="notification-action-close-button"
            >
              {customCloseIcon ? (
                customCloseIcon
              ) : (
                <Icon
                  as={XIcon}
                  label="x"
                  className="text-current align-text-bottom h-3.5 w-3.5"
                />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

if (__DEV__) {
  Notification.displayName = "Notification";
}

export const useNotification = createToast(Notification);
