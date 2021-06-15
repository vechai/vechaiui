import * as ReactDOM from "react-dom";
import * as React from "react";
import ToastManager, { MessageOptionalOptions } from "./ToastManager";
import { MessageProp, PositionsType } from "./Message";

const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";
const PORTAL_ID = "react-toast";

class Toaster {
  createNotification?: Function;
  removeAll?: Function;
  closeToast?: Function;

  constructor() {
    if (!isBrowser) {
      return;
    }

    let portalElement;
    const existingPortalElement = document.getElementById(PORTAL_ID);

    if (existingPortalElement) {
      portalElement = existingPortalElement;
    } else {
      const el = document.createElement("div");
      el.id = PORTAL_ID;
      el.className = "Toaster";
      if (document.body != null) {
        document.body.appendChild(el);
      }
      portalElement = el;
    }

    ReactDOM.render(
      <ToastManager notify={this.bindNotify as any} />,
      portalElement
    );
  }

  closeAll = () => {
    if (this.removeAll) {
      this.removeAll();
    }
  };

  bindNotify = (fn: Function, removeAll: Function, closeToast: Function) => {
    this.createNotification = fn;
    this.removeAll = removeAll;
    this.closeToast = closeToast;
  };

  notify = (message: MessageProp, options: MessageOptionalOptions = {}) => {
    if (this.createNotification) {
      return this.createNotification(message, options);
    }
  };

  close = (id: number, position: PositionsType) => {
    if(this.closeToast){
      this.closeToast(id, position);
    }
  }
}

export default Toaster;
