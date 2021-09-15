'use strict';

var _scroll = require('modules/scroll');

var _ = _interopRequireDefault(require('headers/1/_'));

var _2 = _interopRequireDefault(require('navigation/1/_'));

var _3 = _interopRequireDefault(require('footers/1/_'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ROOT  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Main entry point for client-side JavaScript, bundled as IIFE.      ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
// DEPENDENCIES
// modules
// components
// EXECUTION
document.addEventListener('DOMContentLoaded', function() {
    (0, _2['default'])();
    (0, _scroll.smooth)();
    (0, _['default'])();
    (0, _3['default'])();
});