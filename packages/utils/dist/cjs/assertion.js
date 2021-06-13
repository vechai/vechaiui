"use strict";

exports.__esModule = true;
exports.isArray = isArray;
exports.isObject = isObject;
exports.__DEV__ = void 0;

// Array assertions
function isArray(value) {
  return Array.isArray(value);
} // Object assertions


function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}

var __DEV__ = process.env.NODE_ENV !== 'production';

exports.__DEV__ = __DEV__;
//# sourceMappingURL=assertion.js.map