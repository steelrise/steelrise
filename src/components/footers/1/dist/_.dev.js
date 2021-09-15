'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = _default;

function _default() {
    var icons = document.querySelectorAll('.rollover');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var icon = _step.value;
            var use = icon.querySelector('use'),
                url = use.getAttribute('xlink:href');
            icon.addEventListener('mouseenter', function(event) {
                use.setAttribute('xlink:href', url + '_');
                event.stopPropagation;
            });
            icon.addEventListener('mouseleave', function(event) {
                use.setAttribute('xlink:href', url);
                event.stopPropagation;
            });
        };

        for (var _iterator = icons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return'] != null) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}