'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = void 0;

var _autoplay = _interopRequireDefault(require('./autoplay'));

var _navigation = _interopRequireDefault(require('./navigation'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Logic for the gallery-1 component.
 * @module index
 * @see module:navigation
 */
var _default = function _default() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 3500 : _ref$delay,
        _ref$autoplay = _ref.autoplay,
        auto = _ref$autoplay === void 0 ? false : _ref$autoplay,
        _ref$navigation = _ref.navigation,
        nav = _ref$navigation === void 0 ? false : _ref$navigation,
        _ref$gallerySelector = _ref.gallerySelector,
        galleries = _ref$gallerySelector === void 0 ? 'gallery-1' : _ref$gallerySelector;

    // ensure proper encoding for use as a CSS expression
    galleries = '.'.concat(CSS.escape(galleries)); // exit early if the specified container is not present

    if (!document.querySelector(galleries)) return null; // store the DOM object of the container selector

    galleries = document.querySelectorAll(galleries); // activate navigation controls

    if (nav) (0, _navigation['default'])(galleries); // activate slideshow autoplay

    if (auto) (0, _autoplay['default'])(galleries, delay); // common functionality

    galleries.forEach(function(gallery) {
        gallery.addEventListener('click', function(event) {
            // prevent "page jump" and maintain vertical position on modal close
            if (event.target.matches('.gallery-1__modal-close')) {
                window.location.hash = '$';
                event.preventDefault();
            }
        });
    });
};

exports['default'] = _default;