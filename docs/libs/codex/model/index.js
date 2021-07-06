import TextEditorEdit from "./edit";
import History from "./history";
import getDefaultKeyBinding from "./keyBiding";
import config from "./config";
import { on, off, emit, getHandlers } from "./event";

// commands
import tab from "./commands/tab";
import backTab from "./commands/backTab";
import enter from "./commands/enter";
import backspace from "./commands/backspace";
import doubleChars from "./commands/doubleChars";

const chars = {
  parens: ["(", ")"],
  "shift-brackets-left": ["{", "}"],
  "brackets-left": ["[", "]"],
  "double-quote": ['"', '"'],
  "single-quote": ["'", "'"],
  "back-quote": ["`", "`"]
};

export default class Codex {
  _dispose = false;
  _previousValue = "";
  textarea = null;
  history = null;
  constructor(target, options = {}) {
    this.textarea = target;

    this.history = new History({
      limit: 100
    });

    this.history.initialize({
      value: this.getValue(),
      from: 0,
      to: 0
    });
    // event handler
    this._previousValue = this.getValue();
    on(this.textarea, "input", this._onInput);
    on(this.textarea, "keydown", this._onKeyDown);
    on(this.textarea, "scroll", this._onScroll);

    config.reset(this);
    if (options) this.setOptions(options);
  }

  /************************* Core ***********************/

  dispose() {
    off(this.textarea, "input", this._onInput);
    off(this.textarea, "keydown", this._onKeyDown);
    off(this.textarea, "scroll", this._onScroll);
    this._dispose = true;
  }

  _onInput = (e) => {
    this.updateHistory();

    emit(this, "change", this, this);
  };

  _onKeyDown = (e) => {
    const options = this.getOptions();
    const { keyBindingFn, insertSpaces, tabSize } = options;
    const command = keyBindingFn(e) || getDefaultKeyBinding(e);
    if (command == null || command === "") return;
    if (command === "undo") {
      e.preventDefault();
      this.history.undo(this._forceEdit);
      return;
    }

    const handlers = getHandlers(this, "keydown");
    let handled = false;

    for (let i = 0; i < handlers.length; ++i) {
      if (Codex._isEventHandled(handlers[i](e, this))) {
        handled = true;
        break;
      }
    }
    if (handled) return;
    if (command === "enter") {
      enter(this, e);
      return;
    }
    const tabCharacter = (insertSpaces ? " " : "\t").repeat(tabSize);
    if (command === "backspace") {
      backspace(this, tabCharacter, e);
      return;
    }
    e.preventDefault();
    // run default command
    switch (command) {
      case "redo":
        this.history.redo(this._forceEdit);
        break;
      case "tab":
      case "back-tab":
        if (command === "tab") tab(this, tabCharacter);
        else backTab(this, tabCharacter);
        break;
      case "parens":
      case "shift-brackets-left":
      case "brackets-left":
      case "double-quote":
      case "single-quote":
      case "back-quote":
        doubleChars(this, chars[command]);
        break;
      default:
        break;
    }
  };

  _onScroll = (e) => {
    emit(this, "scroll", this, this);
  }

  /************************* Getter ***********************/

  getValue() {
    return this.textarea.value;
  }

  getRange() {
    return [this.textarea.selectionStart || 0, this.textarea.selectionEnd || 0];
  }

  getTextarea() {
    return this.textarea;
  }

  /************************* Textarea controller ***********************/
  on = (...args) => {
    on(this, ...args);
  };

  off = (...args) => {
    off(this, ...args);
  };

  replaceText({ text, from, to }) {
    const textLeft = this.textarea.value.substring(0, from);
    const textRight = this.textarea.value.substring(to);
    this.textarea.value = `${textLeft}${text}${textRight}`;
    this.textarea.selectionEnd = from + text.length;
    this._onInput({ target: this.textarea });
  }

  forceUpdate(value) {
    this.textarea.value = value;
    this._onInput({ target: this.textarea });
  }

  select(from, to, length) {
    this.textarea.setSelectionRange(from, to || from + (length || 0));
  }

  putCursorTo(location) {
    this.textarea.selectionEnd = location || 0;
  }

  /*************************Public methods ***********************/

  edit(cb) {
    if (this._disposed) {
      return Promise.reject(
        new Error("Codex#edit not possible on closed editors")
      );
    }
    const edit = new TextEditorEdit();
    cb(edit);
    return this._applyEdit(edit);
  }

  _applyEdit = (editBuilder) => {
    const editData = editBuilder.finalize();
    editData.edits.forEach((edit) => {
      const [from, to] = edit.range;
      this.replaceText({ text: edit.text, from, to });
    });
    return Promise.resolve(null);
  };

  updateHistory = () => {
    const value = this.getValue();
    const difference = Codex._getDifference(this._previousValue, value);
    const lastVersionIndex = this.history.count();
    const range = this.getRange();
    const finalValue = {
      value,
      from: range[0],
      to: range[0]
    };
    if (
      (difference.length === 1 && /\W/.test(difference)) ||
      difference.length > 1 ||
      lastVersionIndex === 0
    ) {
      this.history.save(finalValue);
    } else {
      // update last history version
      this.history.save(finalValue, true);
    }
    this._previousValue = value;
  };

  _forceEdit = (record) => {
    this.textarea.value = record.value;
    this.textarea.selectionStart = record.from;
    this.textarea.selectionEnd = record.to;
    emit(this, "change", this, { force: true });
  };

  /************************* Util methods ***********************/
  static _getDifference(a, b) {
    var i = 0;
    var j = 0;
    var result = "";

    while (j < b.length) {
      if (a[i] !== b[j] || i === a.length) result += b[j];
      else i++;
      j++;
    }
    return result;
  }

  static _isEventHandled(value) {
    return value === "handled" || value === true;
  }

  static _getLines(text, position) {
    return text.substring(0, position).split("\n");
  }
}

config.defineOptions(Codex.prototype, {
  insertSpaces: { initialValue: true },
  tabSize: { initialValue: 2 },
  keyBindingFn: { initialValue: () => null }
});
