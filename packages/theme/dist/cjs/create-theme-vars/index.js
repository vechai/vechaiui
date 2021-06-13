"use strict";

exports.__esModule = true;

var _calc = require("./calc");

Object.keys(_calc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _calc[key]) return;
  exports[key] = _calc[key];
});

var _cssVar = require("./css-var");

Object.keys(_cssVar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _cssVar[key]) return;
  exports[key] = _cssVar[key];
});

var _toCssVar = require("./to-css-var");

Object.keys(_toCssVar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _toCssVar[key]) return;
  exports[key] = _toCssVar[key];
});
//# sourceMappingURL=index.js.map