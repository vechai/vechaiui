export default function backTab(textEditor, tabCharacter) {
  const [from, to] = textEditor.getRange();
  const value = textEditor.getValue();
  const linesBeforeCaret = textEditor.constructor._getLines(value, from);
  const startLine = linesBeforeCaret.length - 1;
  const endLine = textEditor.constructor._getLines(value, to).length - 1;
  const newVal = value
    .split("\n")
    .map((line, i) => {
      if (i >= startLine && i <= endLine && line.startsWith(tabCharacter)) {
        return line.substring(tabCharacter.length);
      }

      return line;
    })
    .join("\n");
  if (value !== newVal) {
    const startLineText = linesBeforeCaret[startLine];

    textEditor
      .edit((editBuilder) => {
        editBuilder.replace(newVal, 0, value.length);
      })
      .then(() => {
        textEditor.select(
          startLineText.startsWith(tabCharacter)
            ? from - tabCharacter.length
            : from,
          to - (value.length - newVal.length)
        );
      });
  }
}
