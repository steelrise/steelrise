"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _del = _interopRequireDefault(require("del"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var clean = function clean() {
  return regeneratorRuntime.async(function clean$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _del["default"])([_.ctx.path.root]));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = clean;
exports["default"] = _default;