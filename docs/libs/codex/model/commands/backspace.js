export default function backspace(textEditor, tabCharacter, e) {
  const [from, to] = textEditor.getRange();
  const value = textEditor.getValue();
  const hasSelection = from !== to;
  const textBeforeCaret = value.substring(0, from);
  if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
    // Get the current line
    e.preventDefault();

    const updatedSelection = from - tabCharacter.length;

    textEditor
      .edit((editBuilder) => {
        editBuilder.replace(
          value.substring(0, from - tabCharacter.length) +
            value.substring(from),
          0,
          value.length
        );
      })
      .then(() => {
        textEditor.putCursorTo(updatedSelection);
      });
  }
}
