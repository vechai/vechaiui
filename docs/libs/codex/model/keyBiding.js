const Keys = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  Z: 90,
  PARENS: 57,
  BRACKETS: 219,
  QUOTE: 222,
  BACK_QUOTE: 192
};
export default function getDefaultKeyBinding(e) {
  switch (e.keyCode) {
    case Keys.Z:
      return e.shiftKey ? "redo" : "undo";
    case Keys.ENTER:
      return "enter";
    case Keys.BACKSPACE:
      return "backspace";
    case Keys.TAB:
      return e.shiftKey ? "back-tab" : "tab";
    case Keys.PARENS:
      return e.shiftKey ? "parens" : null;
    case Keys.BRACKETS:
      return e.shiftKey ? "shift-brackets-left" : "brackets-left";
    case Keys.QUOTE:
      return e.shiftKey ? "double-quote" : "single-quote";
    case Keys.BACK_QUOTE:
      return e.shiftKey ? null : "back-quote";
    default:
      return null;
  }
}
