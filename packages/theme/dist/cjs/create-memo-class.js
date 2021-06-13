"use strict";

exports.__esModule = true;
exports.createMemoClass = createMemoClass;

var _react = require("react");

function createMemoClass(func) {
  return function useMemoClass(args) {
    var dependencies = typeof args === "object" && args !== null ? Object.keys(args).filter(function (key) {
      return key !== "theme";
    }).map(function (key) {
      return args[key];
    }) : [];
    return (0, _react.useMemo)(function () {
      return func(args);
    }, dependencies);
  };
}
//# sourceMappingURL=create-memo-class.js.map