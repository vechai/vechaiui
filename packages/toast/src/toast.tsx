import { toaster, Position } from "@vechaiui/toasted-notes";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { useCallback } from "react";

interface IToast extends DefaultProps {
  /**
   * The title of the toast.
   */
  title?: string;
  /**
   * If `true` adds a close button to the toast.
   */
  closeable?: boolean;
  /**
   * Callback function to close the toast.
   */
  onClose?: () => void;
  /**
   * Callback function to undo the toast.
   */
  onUndo?: () => void;
  /**
   * The description of the toast
   */
  description?: string;
  /**
   * The undo text of the toast
   */
  undoText?: string;
  /**
   * Duration before dismiss in milliseconds, or `null` to never dismiss.
   */
  duration?: number | null;
  /**
   * One of toasted-notes positions.
   */
  position?: keyof typeof Position;
  /**
   * The message of the toast
   */
  message?: string;
  /**
   * The status of the toast
   */
  status?: "info" | "success" | "error" | "warning";
  /**
   * Custom icon
   */
  icon?: React.ElementType;
  /**
   * Custom close icon
   */
  closeIcon?: React.ElementType;
}

interface RenderOption {
  render?: (props: {
    onClose: (id: string) => void;
    id: string;
  }) => React.ReactNode;
}
export type useToastOptions = IToast & RenderOption;

export function createToast(Comp: React.ElementType) {
  return function() {
    const notify = useCallback(
      ({
        position = "bottom",
        duration = 5000,
        render,
        ...rest
      }: useToastOptions) => {
        const options = {
          position,
          duration,
        };

        if (render) {
          return toaster.notify(
            ({ onClose, id }) => render({ onClose, id, ...rest }),
            options
          );
        }

        toaster.notify(
          ({ onClose, id }) => (
            <Comp
              {...{
                onClose,
                id,
                ...rest,
              }}
            />
          ),
          options
        );
      },
      []
    );

    return notify;
  };
}