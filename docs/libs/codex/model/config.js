class Config {
  constructor() {
    this.defaultOptions = {};
  }

  defineOptions(editor, options) {
    if (!editor.$options) this.defaultOptions = editor.$options = {};
    Object.keys(options).forEach(function (key) {
      let opt = options[key];
      opt.name || (opt.name = key);
      editor.$options[opt.name] = opt;
      if ("initialValue" in opt) editor["$" + opt.name] = opt.initialValue;
    });

    editor.setOptions = function (opts) {
      Object.keys(opts).forEach(function (key) {
        this.setOption(key, opts[key]);
      }, this);
    };

    editor.getOptions = function () {
      const result = {};
      const options = this.$options;
      Object.keys(options).forEach((key) => {
        result[key] = this.getOption(key);
      }, this);
      return result;
    };

    editor.setOption = function (name, value) {
      if (this["$" + name] === value) return;
      const option = this.$options[name];
      this["$" + name] = value;
      if (option && option.set) option.set.call(this, value);
    };

    editor.getOption = function (name) {
      const option = this.$options[name];
      return option && option.get ? option.get.call(this) : this["$" + name];
    };

    return this;
  }

  reset(editor) {
    Object.keys(editor.$options).forEach(function (key) {
      const opt = editor.$options[key];
      if ("value" in opt) editor.setOption(key, opt.value);
    });
  }
}

const config = new Config();

export default config;
