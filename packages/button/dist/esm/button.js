var _excluded = ["disabled", "loading", "active", "loadingText", "type", "leftIcon", "rightIcon", "children", "className", "color", "variant", "size"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { Spinner } from "@vechaiui/spinner";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import useButtonClass from "./styles";
export var Button = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
    disabled: _disabled,
    loading,
    active,
    loadingText,
    type,
    leftIcon,
    rightIcon,
    children,
    className,
    color,
    variant = "outline",
    size = "md"
  } = props,
      rest = _objectWithoutPropertiesLoose(props, _excluded);

  var disabled = _disabled || loading;
  var classes = useButtonClass({
    variant,
    size,
    disabled
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    disabled: disabled,
    "aria-disabled": disabled,
    type: type,
    "data-active": active ? "true" : undefined,
    "data-color": color ? color : undefined,
    className: cx(classes, className)
  }, rest), leftIcon && !loading ? leftIcon : null, loading && /*#__PURE__*/React.createElement(Spinner, {
    className: cx(loadingText ? "relative" : "absolute", loadingText ? "mr-2" : "mr-0"),
    size: "sm"
  }), loading ? loadingText || /*#__PURE__*/React.createElement("span", {
    className: "opacity-0"
  }, children) : children, rightIcon && !loading ? rightIcon : null);
});

if (__DEV__) {
  Button.displayName = "Button";
}
//# sourceMappingURL=button.js.map