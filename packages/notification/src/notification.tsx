import { Button } from "@vechaiui/button";
import {
  Icon,
  Info,
  X,
  XCricle,
  CheckCircle,
  Exclamation,
} from "@vechaiui/icon";
import { createToast, useToastOptions } from "@vechaiui/toast";
import { cx as clsx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

const statuses = {
  info: { icon: Info, cx: "notification-icon-info" },
  success: { icon: CheckCircle, cx: "notification-icon-success" },
  error: { icon: XCricle, cx: "notification-icon-error" },
  warning: { icon: Exclamation, cx: "notification-icon-warning" },
};

type OmittedTypes = "message";

export interface NotificationProps
  extends Omit<useToastOptions, OmittedTypes> {}

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
    const { icon, cx } = statuses[status] || {};

    return (
      <div ref={ref} className={clsx("notification", className)}>
        {((icon && cx) || customIcon) && (
          <span className={clsx("notification-icon", cx)}>
            {customIcon ? (
              customIcon
            ) : (
              <Icon as={customIcon || icon} size={20} />
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
                  as={X}
                  size={14}
                  className="text-current align-text-bottom"
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
