"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = throttle;

/**
 * throttle - throttles a function to emit only every nth second
 *
 * @param  Function fn           The function to throttle
 * @param  Number   [threshhold] A number of ms (defaults to 250)
 * @param  Any      [thisArg]    An optional context for the function
 * @return Function              The throttled function
 */
function throttle(fn, threshhold, thisArg) {
	threshhold || (threshhold = 250);
	var last, timer;
	return function throttled() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var context = thisArg || this;
		var now = +new Date();
		if (last && now < last + threshhold) {
			clearTimeout(timer);
			timer = setTimeout(function () {
				last = now;
				fn.apply(context, args);
			}, threshhold);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
}