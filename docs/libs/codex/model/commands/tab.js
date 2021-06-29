export default function tab(textEditor, tabCharacter) {
  const [from, to] = textEditor.getRange();
  const value = textEditor.getValue();

  if (from !== to) {
    const linesBeforeCaret = textEditor.constructor._getLines(value, from);
    const startLine = linesBeforeCaret.length - 1;
    const endLine = textEditor.constructor._getLines(value, to).length - 1;
    const startLineText = linesBeforeCaret[startLine];
    const newVal = value
      .split("\n")
      .map((line, i) => {
        if (i >= startLine && i <= endLine) {
          return tabCharacter + line;
        }

        return line;
      })
      .join("\n");

    textEditor
      .edit((editBuilder) => {
        editBuilder.replace(newVal, 0, value.length);
      })
      .then(() => {
        textEditor.select(
          /\S/.test(startLineText) ? from + tabCharacter.length : from,
          to + tabCharacter.length * (endLine - startLine + 1)
        );
      });
  } else {
    textEditor.edit((editBuilder) => {
      editBuilder.insert(tabCharacter, from);
    });
  }
}
