"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

/**
 * debounce - debounces a function to run only a certain number of times per second
 * The debounced returned function has a `delay` property that can be changed
 * to obtain dynamic delays.
 *
 * @param  Function fn        a function
 * @param  Number   [delay]   the delay (defaults to 300ms)
 * @param  any      [thisArg] an optional context for the function
 * @return Function           the debounced function
 */
function debounce(fn, delay, thisArg) {
  delay = delay || 300;
  var timer = null;
  function debounced() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = thisArg || this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      return fn.apply(context, args);
    }, debounced.delay);
  };
  debounced.delay = delay;
  return debounced;
}