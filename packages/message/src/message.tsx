import { Icon, Info, XCricle, CheckCircle, Exclamation } from "@vechaiui/icon";
import { createToast, useToastOptions } from "@vechaiui/toast";
import { cx as clsx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

const statuses = {
  info: { icon: Info, cx: "message-icon-info" },
  success: { icon: CheckCircle, cx: "message-icon-success" },
  error: { icon: XCricle, cx: "message-icon-error" },
  warning: { icon: Exclamation, cx: "message-icon-warning" },
};

type OmittedTypes =
  | "title"
  | "closeable"
  | "closeIcon"
  | "onUndo"
  | "undoText"
  | "description";

export interface MessageProps extends Omit<useToastOptions, OmittedTypes> {}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ message, className, icon: customIcon, status = "" }, ref) => {
    const { icon, cx } = statuses[status] || {};
    return (
      <div className={clsx("message", className)} ref={ref}>
        {((icon && cx) || customIcon) &&
          (customIcon ? (
            customIcon
          ) : (
            <Icon as={icon} size={18} className={clsx("message-icon", cx)} />
          ))}
        <span>{message}</span>
      </div>
    );
  }
);

if (__DEV__) {
  Message.displayName = "Message";
}

export const useMessage = createToast(Message);