"use strict";

exports.__esModule = true;
exports.hsl2rgb = hsl2rgb;
exports.hwb2rgb = hwb2rgb;
exports.toRGBA = toRGBA;
exports.toRGB = toRGB;
exports.toColor = toColor;

var _colorString = _interopRequireDefault(require("color-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function hsl2rgb(h, s, l) {
  s = s / 100, l = l / 100;
  if (h >= 360) h %= 360;
  var c = (1 - Math.abs(2 * l - 1)) * s;
  var x = c * (1 - Math.abs(h / 60 % 2 - 1));
  var m = l - c / 2;
  var r = 0;
  var g = 0;
  var b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  } // having obtained RGB, convert channels to hex


  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  return [r, g, b];
}

function hwb2rgb(h, w, b) {
  var rgb = hsl2rgb(h, 100, 50);

  for (var i = 0; i < 3; ++i) {
    var c = rgb[i] / 255;
    c *= 1 - w / 100 - b / 100;
    c += w / 100;
    rgb[i] = Math.round(c * 255);
  }

  return rgb;
}

function toRGBA(color) {
  var _colorString$get;

  if (/^hsla?/.test(color)) {
    var colorTuple = _colorString["default"].get.hsl(color);

    if (!colorTuple) return;
    return [].concat(hsl2rgb(colorTuple[0], colorTuple[1], colorTuple[2]), [colorTuple[3]]);
  } else if (/^rgba?/.test(color)) {
    var _colorTuple = _colorString["default"].get.rgb(color);

    if (!_colorTuple) return;
    return _colorTuple;
  } else if (color.startsWith("hwb")) {
    var _colorTuple2 = _colorString["default"].get.hwb(color);

    if (!_colorTuple2) return;
    return [].concat(hwb2rgb(_colorTuple2[0], _colorTuple2[1], _colorTuple2[2]), [_colorTuple2[3]]);
  }

  return (_colorString$get = _colorString["default"].get(color)) == null ? void 0 : _colorString$get.value;
}

function toRGB(color) {
  var _toRGBA;

  return (_toRGBA = toRGBA(color)) == null ? void 0 : _toRGBA.slice(0, 3);
}

function toColor(colorStr) {
  var rgba = toRGBA(colorStr);
  var color = rgba ? rgba.slice(0, 3).join(", ") : colorStr;
  var opacity = rgba ? rgba[3].toString() : "1";
  return {
    color: color,
    opacity: opacity
  };
}
//# sourceMappingURL=color.js.map