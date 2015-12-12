"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pop = pop;
exports.splice = splice;
exports.push = push;
exports.sort = sort;
exports.reverse = reverse;
exports.shift = shift;
exports.unshift = unshift;
function pop(arr) {
	return arr.slice(arr, arr.length - 1);
}

function splice(arr, start, deleteCount) {
	var newArr = arr.slice();

	for (var _len = arguments.length, items = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
		items[_key - 3] = arguments[_key];
	}

	newArr.splice.apply(newArr, [start, deleteCount].concat(items));
	return newArr;
}

function push(arr) {
	for (var _len2 = arguments.length, objs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		objs[_key2 - 1] = arguments[_key2];
	}

	return arr.concat(objs);
}

function sort(arr, predicate) {
	return arr.slice().sort(predicate);
}

function reverse(arr) {
	return arr.slice().reverse();
}

function shift(arr) {
	var newArr = arr.slice();
	newArr.shift();
	return newArr;
}

function unshift(arr) {
	var newArr = arr.slice();

	for (var _len3 = arguments.length, elements = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
		elements[_key3 - 1] = arguments[_key3];
	}

	newArr.unshift.apply(newArr, elements);
	return newArr;
}