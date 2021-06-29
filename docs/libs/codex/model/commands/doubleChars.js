export default function doubleChars(textEditor, chars) {
  const [from, to] = textEditor.getRange();
  const value = textEditor.getValue();

  if (from !== to) {
    const newVal =
      value.substring(0, from) +
      chars[0] +
      value.substring(from, to) +
      chars[1] +
      value.substring(to);

    textEditor
      .edit((editBuilder) => {
        editBuilder.replace(newVal, 0, value.length);
      })
      .then(() => {
        textEditor.select(from + 1, to + 1);
      });
  } else {
    textEditor
      .edit((editBuilder) => {
        editBuilder.insert(chars.join(""), from);
      })
      .then(() => {
        textEditor.putCursorTo(from + 1);
      });
  }
}
