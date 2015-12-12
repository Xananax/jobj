'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getNestedProperty;

var _traverse = require('./traverse');

var _traverse2 = _interopRequireDefault(_traverse);

var _consts = require('./consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arraysEqual(arr1, arr2) {
	return arr1.length == arr2.length && arr1.every(function (el, i) {
		arr2[i] == el;
	});
}

/**
 * getNestedProperty - Finds a property in an object with a provided path
 *
 * @param  Object       obj  The object to look into
 * @param  Array|String path The path, either as an array, or a dot separated string
 * @return any               The value, if found, or undefined
 */
function getNestedProperty(obj, path) {
	if (typeof path == 'string') {
		path = path.split('.');
	}
	var answer;
	(0, _traverse2.default)(obj, function (value, key, currPath) {
		if (arraysEqual(path, currPath)) {
			answer = value;
			return false;
		}
	}, _consts.REVERSE, path.length);
	return answer;
}