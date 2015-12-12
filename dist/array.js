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

/**
 * pop - removes the last element from an array
 *
 * @param  Array arr the array
 * @return Array     a transformed array
 */
function pop(arr) {
  return arr.slice(arr, arr.length - 1);
}

/**
 * splice - removes/inserts one or more elements from/into an array
 *
 * @param  Array arr          the array
 * @param  {type} start       index to begin splicing at
 * @param  {type} deleteCount number of items to remove
 * @param  {type} ...items    items to add
 * @return Array              a transformed array
 */
function splice(arr, start, deleteCount) {
  var newArr = arr.slice();

  for (var _len = arguments.length, items = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    items[_key - 3] = arguments[_key];
  }

  newArr.splice.apply(newArr, [start, deleteCount].concat(items));
  return newArr;
}

/**
 * push - adds elements to an array's tail
 *
 * @param  Array arr      the array
 * @param  {type} ...objs objects to add
 * @return Array          a transformed array
 */
function push(arr) {
  for (var _len2 = arguments.length, objs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    objs[_key2 - 1] = arguments[_key2];
  }

  return arr.concat(objs);
}

/**
 * sort - sorts an array according to a given predicate
 *
 * @param  Array arr        the array
 * @param  {type} predicate a function to filter with
 * @return Array            a transformed array
 */
function sort(arr, predicate) {
  return arr.slice().sort(predicate);
}

/**
 * reverse - reverses an array sorting order
 *
 * @param  Array arr the array
 * @return Array     a transformed array
 */
function reverse(arr) {
  return arr.slice().reverse();
}

/**
 * shift removes the first element of an array
 *
 * @param  Array arr the array
 * @return Array     a transformed array
 */
function shift(arr) {
  var newArr = arr.slice();
  newArr.shift();
  return newArr;
}

/**
 * unshift - adds elements to the beginning of an array
 *
 * @param  Array arr          the array
 * @param  {type} ...elements elements to add
 * @return Array              a transformed array
 */
function unshift(arr) {
  var newArr = arr.slice();

  for (var _len3 = arguments.length, elements = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    elements[_key3 - 1] = arguments[_key3];
  }

  newArr.unshift.apply(newArr, elements);
  return newArr;
}