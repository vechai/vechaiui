"use strict";

exports.__esModule = true;
exports.Button = void 0;

var _spinner = require("@vechaiui/spinner");

var _utils = require("@vechaiui/utils");

var React = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _excluded = ["disabled", "loading", "active", "loadingText", "type", "leftIcon", "rightIcon", "children", "className", "color", "variant", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _disabled = props.disabled,
      loading = props.loading,
      active = props.active,
      loadingText = props.loadingText,
      type = props.type,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      children = props.children,
      className = props.className,
      color = props.color,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? "outline" : _props$variant,
      _props$size = props.size,
      size = _props$size === void 0 ? "md" : _props$size,
      rest = _objectWithoutPropertiesLoose(props, _excluded);

  var disabled = _disabled || loading;
  var classes = (0, _styles["default"])({
    variant: variant,
    size: size,
    disabled: disabled
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    disabled: disabled,
    "aria-disabled": disabled,
    type: type,
    "data-active": active ? "true" : undefined,
    "data-color": color ? color : undefined,
    className: (0, _utils.cx)(classes, className)
  }, rest), leftIcon && !loading ? leftIcon : null, loading && /*#__PURE__*/React.createElement(_spinner.Spinner, {
    className: (0, _utils.cx)(loadingText ? "relative" : "absolute", loadingText ? "mr-2" : "mr-0"),
    size: "sm"
  }), loading ? loadingText || /*#__PURE__*/React.createElement("span", {
    className: "opacity-0"
  }, children) : children, rightIcon && !loading ? rightIcon : null);
});
exports.Button = Button;

if (_utils.__DEV__) {
  Button.displayName = "Button";
}
//# sourceMappingURL=button.js.map