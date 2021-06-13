"use strict";

exports.__esModule = true;

var _spinner = require("./spinner");

Object.keys(_spinner).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _spinner[key]) return;
  exports[key] = _spinner[key];
});
//# sourceMappingURL=index.js.map