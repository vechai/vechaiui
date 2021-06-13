"use strict";

exports.__esModule = true;
exports.walkObject = walkObject;

var _ = require("./");

function walkObject(target, predicate) {
  function inner(value, path) {
    if (path === void 0) {
      path = [];
    }

    if ((0, _.isArray)(value)) {
      return value.map(function (item, index) {
        return inner(item, [].concat(path, [String(index)]));
      });
    }

    if ((0, _.isObject)(value)) {
      return Object.fromEntries(Object.entries(value).map(function (_ref) {
        var key = _ref[0],
            child = _ref[1];
        return [key, inner(child, [].concat(path, [key]))];
      }));
    }

    return predicate(value, path);
  }

  return inner(target);
}
//# sourceMappingURL=walk-object.js.map