'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = traverse;

var _consts = require('./consts');

function _traverse(obj, fn, path, key, maxDepth, reverse, useArrays, useObjects) {
	var stop = reverse ? fn(obj, key, path) : false;
	if (stop === false) {
		return;
	}
	if (!maxDepth || path.length < maxDepth) {
		if (useArrays && Array.isArray(obj)) {
			var length = obj.length;
			var k = 0;
			while (k < length) {
				var val = obj[k];
				path.push(k++);
				var _stop = _traverse(val, fn, path, k, maxDepth, reverse, useArrays, useObjects);
				if (_stop === false) {
					return;
				}
				path.pop();
			}
		} else if (useObjects && obj.constructor == Object) {
			var keys = Object.keys(obj);
			var length = keys.length;
			var i = 0;
			while (i < length) {
				var _k = keys[i++];
				var val = obj[keys[_k]];
				var _stop2 = _traverse(val, fn, path, _k, maxDepth, reverse, useArrays, useObjects);
				if (_stop2 === false) {
					return;
				}
				path.pop();
			}
		}
	}
	return reverse ? fn(obj, key, path) : false;
};

/**
 * traverse
 * traverses an object, applying a functor to each element
 * This method operates in a depth-first order, that is, and object's elements
 * will be operated on before the object iself.
 *
 * Functor signature:
 * function(value,key,path){}
 * value: the current value
 * key: the current key
 * path: an array representing the current path. The last element should == key
 *
 * If the functor returns false (not a falsy value) at any moment, operation is
 * stopped.
 *
 * There are three binary flags (exposed on the function itself):
 *
 * - REVERSE: reverses the order; the function is first applied to the parent object
 * - SKIP_ARRAYS: array elements won't be used
 * - SKIP_OBJECTS: object elements won't be used
 *
 * @param  any       obj        The object to traverse
 * @param  Function  fn         The function to apply
 * @param  Int       [opts]     A mix of REVERSE,
 * @param  Int       [maxDepth] maximum recursion. Defaults to Infinity
 * @return undefined
 */
function traverse(obj, fn, opts, maxDepth) {
	var reverse = opts & _consts.REVERSE;
	var useArrays = !(opts & _consts.SKIP_ARRAYS);
	var useObjects = !(opts & _consts.SKIP_OBJECTS);
	_traverse(obj, fn, [], null, maxDepth, reverse, useArrays, useObjects);
};

traverse.REVERSE = _consts.REVERSE;
traverse.SKIP_ARRAYS = _consts.SKIP_ARRAYS;
traverse.SKIP_OBJECTS = _consts.SKIP_OBJECTS;