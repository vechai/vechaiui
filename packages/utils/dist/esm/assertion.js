// Array assertions
export function isArray(value) {
  return Array.isArray(value);
} // Object assertions

export function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
export var __DEV__ = process.env.NODE_ENV !== 'production';
//# sourceMappingURL=assertion.js.map