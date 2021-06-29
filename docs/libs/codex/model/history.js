export default class History {
  position = -1;
  stack = [];
  limit = 0;
  wait = 0;
  constructor(options = {}) {
    this.initialValue = null;
    this.clear();

    this.limit = options.limit || 30;
    this.wait = options.wait || 3000;
  }

  initialize(value) {
    const timestamp = Date.now();
    const initialValue = { ...value, timestamp };
    this.stack[0] = initialValue;
    this.initialValue = initialValue;
  }

  clear() {
    this.stack = [this.initialValue];
    this.position = 0;
  }

  save(record, overwrite) {
    if (this.stack.length && this.position > -1) {
      // When something updates, drop the redo operations
      this.stack = this.stack.slice(0, this.position + 1);

      // Limit the number of operations to 100
      const count = this.stack.length;

      if (count > this.limit) {
        const extras = count - this.limit;

        this.stack = this.stack.slice(extras, count);
        this.position = Math.max(this.position - extras, 0);
      }
    }

    const timestamp = Date.now();
    if (overwrite) {
      const last = this.stack[this.position];

      if (last && timestamp - last.timestamp < this.wait) {
        // A previous entry exists and was in short interval

        // Match the last word in the line
        const re = /[^a-z0-9]([a-z0-9]+)$/i;

        // Get the previous line
        const previous = History._getLines(last.value, last.selectionStart)
          .pop()
          .match(re);

        // Get the current line
        const current = History._getLines(record.value, record.selectionStart)
          .pop()
          .match(re);

        if (previous && current && current[1].startsWith(previous[1])) {
          // The last word of the previous line and current line match
          // Overwrite previous entry so that undo will remove whole word
          this.stack[this.position] = { ...record, timestamp };

          return;
        }
      }
    }

    // Add the new operation to the stack
    this.stack.push({ ...record, timestamp });
    this.position++;
  }

  count() {
    return this.stack.length - 1;
  }

  canUndo() {
    return this.position > 0;
  }

  canRedo() {
    return this.position < this.count();
  }

  undo(cb) {
    if (this.canUndo()) {
      const record = this.stack[this.position - 1];
      if (cb && record) {
        cb(record);
        this.position = Math.max(this.position - 1, 0);
      }
    }
  }

  redo(cb) {
    if (this.canRedo()) {
      const record = this.stack[this.position + 1];
      if (cb && record) {
        cb(record);
        this.position = Math.min(this.position + 1, this.count());
      }
    }
  }

  static _getLines(text, position) {
    return text.substring(0, position).split("\n");
  }
}
