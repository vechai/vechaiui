"use strict";

exports.__esModule = true;
exports.createThemeVars = createThemeVars;

var _utils = require("@vechaiui/utils");

var _cssVar2 = require("./css-var");

function createThemeVars(target, options) {
  var context = {
    cssMap: {},
    cssVars: {}
  };
  (0, _utils.walkObject)(target, function (value, path) {
    var _tokenHandlerMap$firs;

    // firstKey will be e.g. "space"
    var firstKey = path[0];
    var handler = (_tokenHandlerMap$firs = tokenHandlerMap[firstKey]) != null ? _tokenHandlerMap$firs : tokenHandlerMap.defaultHandler;

    var _handler = handler(path, value, options),
        cssVars = _handler.cssVars,
        cssMap = _handler.cssMap;

    Object.assign(context.cssVars, cssVars);
    Object.assign(context.cssMap, cssMap);
  });
  return context;
}

/**
 * Define transformation handlers for ThemeScale
 */
var tokenHandlerMap = {
  defaultHandler: function defaultHandler(keys, value, options) {
    var _cssVars, _cssMap;

    var lookupKey = keys.join(".");
    var varKey = keys.join("-");

    var _cssVar = (0, _cssVar2.cssVar)(varKey, undefined, options.cssVarPrefix),
        variable = _cssVar.variable,
        reference = _cssVar.reference;

    return {
      cssVars: (_cssVars = {}, _cssVars[variable] = value, _cssVars),
      cssMap: (_cssMap = {}, _cssMap[lookupKey] = {
        value: value,
        "var": variable,
        varRef: reference
      }, _cssMap)
    };
  }
};
//# sourceMappingURL=create-theme-vars.js.map