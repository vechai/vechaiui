export default function enter(textEditor, e) {
  const [from, to] = textEditor.getRange();
  const value = textEditor.getValue();
  if (from === to) {
    // Get the current line
    const line = textEditor.constructor._getLines(value, from).pop();
    const matches = line.match(/^\s+/);

    if (matches && matches[0]) {
      e.preventDefault();
      // Preserve indentation on inserting a new line
      const indent = "\n" + matches[0];
      textEditor.edit((editBuilder) => {
        editBuilder.insert(indent, from);
      });
    }
  }
}
