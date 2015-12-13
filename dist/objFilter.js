'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = objFilter;

var _consts = require('./consts');

function _objFilter(obj, fn, reverse, thisArg) {
	if (!obj) {
		return {};
	}
	var newObj = {};
	Object.keys(obj).forEach(function (key, i) {
		var val = obj[key];
		var res = fn.call(thisArg, val, key, obj, i);
		if (reverse) {
			res = !res;
		}
		if (res == true) {
			newObj[key] = res;
		}
	});
	return newObj;
}

/**
 * objFilter - Filters an object's properties given a predicate.
 * This predicate can either be:
 * - an array of strings: keys that are not in the array will be removed
 * - a function of signature function(value,key,object,index): should return `true` or `false`
 *
 * Options:
 * - REVERSE: reverses the results. In this case, values that are NOT in the
 *            provided array will be included (or values for which the functor
 *            returns `false`).
 *
 * @param  Object         obj       The object to filter
 * @param  Function|Array predicate Either a function, or an array of keys
 * @param  Int            [opts]    flags for the function
 * @param  any            [thisArg] A context for the function
 * @return Object                   A new object
 */
function objFilter(obj, predicate, opts, thisArg) {
	var reverse = opts & _consts.REVERSE;
	if (typeof predicate !== 'function') {
		(function () {
			var arr = predicate;
			predicate = function generatedPredicate(val, key, obj, i) {
				return arr.indexOf(key) >= 0;
			};
		})();
	}
	return _objFilter(obj, predicate, reverse, thisArg);
}

objFilter.REVERSE = _consts.REVERSE;