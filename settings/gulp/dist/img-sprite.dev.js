"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.plugins = void 0;

var _path = _interopRequireDefault(require("path"));

var _gulp = require("gulp");

var _merge = _interopRequireDefault(require("merge2"));

var _gulpSvgSprite = _interopRequireDefault(require("gulp-svg-sprite"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function filename(name) {
  return _path["default"].basename(name, '.svg');
}
/*━━━━━━━━━━━━━━━━━━━━━━━━━  MINIFY OPTIONS  ━━━━━━━━━━━━━━━━━━━━━━━━━
 *    SVGO and its defaults · github.com/svg/svgo#what-it-can-do    */


var plugins = [{
  removeViewBox: false
}, {
  removeTitle: false
}, {
  removeDesc: false
}, {
  mergePaths: false
}, {
  convertStyleToAttrs: false
}, {
  moveGroupAttrsToElems: false
}, // move some group attributes to the content elements
{
  convertShapeToPath: false
}, // convert some basic shapes to path
{
  removeDimensions: false
}, // remove WxH (required for IE 9 & 10, progressive enhancement)
{
  transformsWithOnePath: false
} // apply transforms, crop by real width, center vertical alignment and resize SVG with one path inside
];
/*━━━━━━━━━━━━━━━━━━━━━━━━━  SPRITE OPTIONS  ━━━━━━━━━━━━━━━━━━━━━━━*/

exports.plugins = plugins;
var view = {
  // "view" sprite config
  dest: '',
  // disable "mode" directory prefix
  sprite: 'views.svg',
  // sprite path and filename
  bust: false,
  // cache busting switch
  layout: 'packed' // graphics arrangement

};
var symbol = {
  // "symbol" sprite config
  dest: '',
  // disable "mode" directory prefix
  sprite: 'symbols.svg',
  // sprite path and filename
  bust: false // cache busting switch

};
/*━━━━━━━━━━━━━━━━━━━━━━━━━  SHAPE OPTIONS  ━━━━━━━━━━━━━━━━━━━━━━━━*/

var shape = {
  id: {
    generator: filename
  },
  dimension: {
    // normalize dimensions
    maxWidth: 100,
    maxHeight: 100,
    precision: 2
  },
  spacing: {
    padding: 0,
    // prevent adjacent edges showing
    box: 'content' // box-sizing strategy

  },
  transform: [{
    svgo: {
      plugins: plugins
    }
  }]
};
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  TASK  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

function imgSprite() {
  return (0, _merge["default"])( // stream: views
  (0, _gulp.src)("".concat(_.src.root, "/**/_views/*.svg")).pipe((0, _gulpSvgSprite["default"])({
    shape: shape,
    mode: {
      view: view
    }
  })).pipe((0, _gulp.dest)("".concat(_.ctx.path.images, "/_sprites"))), // stream: symbols
  (0, _gulp.src)("".concat(_.src.root, "/**/_symbols/*.svg")).pipe((0, _gulpSvgSprite["default"])({
    shape: shape,
    mode: {
      symbol: symbol
    }
  })).pipe((0, _gulp.dest)("".concat(_.ctx.path.images, "/_sprites"))));
}

var _default = imgSprite;
exports["default"] = _default;