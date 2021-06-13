"use strict";

exports.__esModule = true;
exports.omit = omit;
exports.pick = pick;
exports.deepmerge = deepmerge;

var _assertion = require("./assertion");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function omit(object, keys) {
  var result = {};
  Object.keys(object).forEach(function (key) {
    if (keys.includes(key)) return;
    result[key] = object[key];
  });
  return result;
}

function pick(object, keys) {
  var result = {};
  keys.forEach(function (key) {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}

function deepmerge(target, source, options) {
  if (options === void 0) {
    options = {
      clone: false
    };
  }

  var output = options.clone ? _extends({}, target) : target;

  if ((0, _assertion.isObject)(target) && (0, _assertion.isObject)(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === "__proto__") {
        return;
      }

      if ((0, _assertion.isObject)(source[key]) && key in target) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}
//# sourceMappingURL=object.js.map