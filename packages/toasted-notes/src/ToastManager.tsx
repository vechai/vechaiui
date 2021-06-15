import * as React from "react";
import {
  Message,
  PositionsType,
  MessageType,
  MessageOptions,
  MessageProp
} from "./Message";

interface Props {
  notify: (fn: Function, closeAll: Function, close: Function) => void;
}

export interface MessageOptionalOptions {
  type?: MessageType;
  duration?: number | null;
  position?: PositionsType;
}

interface ToastArgs extends MessageOptions {
  message: MessageProp;
}

type State = {
  top: Array<ToastArgs>;
  "top-left": Array<ToastArgs>;
  "top-right": Array<ToastArgs>;
  "bottom-left": Array<ToastArgs>;
  bottom: Array<ToastArgs>;
  "bottom-right": Array<ToastArgs>;
};

const defaultState: State = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
};

type Keys = keyof State;

export default class ToastManager extends React.Component<Props, State> {
  static idCounter = 0;

  state: State = defaultState;

  constructor(props: Props) {
    super(props);
    props.notify(this.notify, this.closeAll, this.closeToast);
  }

  notify = (message: MessageProp, options: MessageOptionalOptions) => {
    const toast = this.createToastState(message, options);
    const { position } = toast;

    // prepend the toast for toasts positioned at the top of
    // the screen, otherwise append it.
    const isTop = position.includes("top");

    this.setState(prev => {
      return {
        ...prev,
        [position]: isTop
          ? [toast, ...prev[position]]
          : [...prev[position], toast]
      };
    });
    return { id: toast.id, position: toast.position };
  };

  closeAll = () => {
    Object.keys(this.state).forEach(pos => {
      const p = pos as keyof State;
      const position = this.state[p];
      position.forEach((toast: any) => {
        this.closeToast(toast.id, p);
      });
    });
  };

  createToastState = (
    message: MessageProp,
    options: MessageOptionalOptions
  ) => {
    const id = ++ToastManager.idCounter;

    // a bit messy, but object.position returns a number because
    // it's a method argument.
    const position =
      options.hasOwnProperty("position") && typeof options.position === "string"
        ? options.position
        : "top";

    return {
      id,
      message,
      position,
      showing: true,
      duration:
        typeof options.duration === "undefined" ? 5000 : options.duration,
      onRequestRemove: () => this.removeToast(String(id), position),
      type: options.type
    };
  };

  closeToast = (id: string, position: PositionsType) => {
    this.setState(prev => {
      return {
        ...prev,
        [position]: prev[position].map(toast => {
          if (toast.id !== id) return toast;
          return {
            ...toast,
            requestClose: true
          };
        })
      };
    });
  };

  // actually fully remove the toast
  removeToast = (id: string, position: PositionsType) => {
    this.setState(prev => {
      return {
        ...prev,
        [position]: prev[position].filter(toast => toast.id !== id)
      };
    });
  };

  getStyle = (position: PositionsType) => {
    let style: React.CSSProperties = {
      maxWidth: "560px",
      position: "fixed",
      zIndex: 5500,
      pointerEvents: "none"
    };

    if (position === "top" || position === "bottom") {
      style.margin = "0 auto";
      style.textAlign = "center";
    }

    if (position.includes("top")) {
      style.top = 0;
    }

    if (position.includes("bottom")) {
      style.bottom = 0;
    }

    if (!position.includes("left")) {
      style.right = 0;
    }

    if (!position.includes("right")) {
      style.left = 0;
    }

    return style;
  };

  render() {
    return Object.keys(this.state).map(position => {
      const pos = position as keyof State;
      const toasts = this.state[pos];
      return (
        <span
          key={position}
          className={"Toaster__manager-" + pos}
          style={this.getStyle(pos)}
        >
          {toasts.map((toast: ToastArgs) => {
            return <Message position={pos} key={toast.id} {...toast} />;
          })}
        </span>
      );
    });
  }
}
