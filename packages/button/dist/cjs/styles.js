"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _theme = require("@vechaiui/theme");

var _utils = require("@vechaiui/utils");

var variantClasses = {
  outline: "btn-outline",
  solid: "btn-solid",
  ghost: "btn-ghost",
  light: "btn-light",
  link: "btn-link"
};
var sizes = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl"
};

var _default = (0, _theme.createMemoClass)(function (props) {
  var classes = (0, _utils.cx)("btn", sizes[props.size], variantClasses[props.variant], props.disabled && "btn-disabled");
  return classes;
});

exports["default"] = _default;
//# sourceMappingURL=styles.js.map