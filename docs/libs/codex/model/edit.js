export default class TextEditorEdit {
  _collectedEdits = [];
  _finalized = false;

  finalize() {
    this._finalized = true;
    return {
      edits: this._collectedEdits
    };
  }

  _throwIfFinalized() {
    if (this._finalized) {
      throw new Error("Edit is only valid while callback runs");
    }
  }

  insert(value, from) {
    this._throwIfFinalized();
    const range = [from, from];
    this._pushEdit(range, value);
  }
  replace(value, from, to) {
    this._throwIfFinalized();
    const range = [from, to ? to : from];
    this._pushEdit(range, value);
  }
  delete(from, to) {
    this.replace("", from, to);
  }

  _pushEdit(range, text) {
    this._collectedEdits.push({
      range,
      text
    });
  }
}
