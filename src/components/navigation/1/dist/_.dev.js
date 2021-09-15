'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = _default;

var _animation = require('libs/animation');

function _default() {
    console.log('Test'); // preflight checks

    if (!document.querySelector('.nav-1')) return;

    try {
        if (!document.querySelector('.nav-1[data-target]')) {
            throw new Error('Platframe: "nav-1" requires its "data-target" attribute to be set.');
        }
    } catch (error) {
        console.error(error.message);
        return;
    } // begin procedure

    var triggers = document.querySelectorAll('.nav-1'),
        duration = 500;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var trigger = _step.value;
            var target = document.querySelector('#'.concat(trigger.attributes['data-target'].value));
            trigger.querySelector('button').addEventListener('click', function(event) {
                // prefer native implementation
                if ('scrollBehavior' in document.documentElement.style) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    (0, _animation.scroll)(target.offsetTop, duration);
                }

                event.stopPropagation();
            });
        };

        for (var _iterator = triggers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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