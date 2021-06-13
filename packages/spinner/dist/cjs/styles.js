"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _theme = require("@vechaiui/theme");

var _utils = require("@vechaiui/utils");

var sizes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12"
};

var _default = (0, _theme.createMemoClass)(function (props) {
  var className = (0, _utils.cx)("animate-spin", sizes[props.size]);
  return className;
});

exports["default"] = _default;
//# sourceMappingURL=styles.js.map