"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayToObj;
/**
 *
 * arrayToObj - transforms an array into an object, applying the given functor on
 * each element.
 * The functor has the following signature
 * function(value,index)
 * And should return an array of two elements: [key,value], that will be used
 * to create the final object
 *
 * @param  Array    arr  the original array
 * @param  Function fn   description
 * @return Object        the object, as returned from the functor
 */
function arrayToObj(arr, fn) {
  var obj = {};
  arr.forEach(function (item, i) {
    var _fn = fn(item, i);

    var _fn2 = _slicedToArray(_fn, 2);

    var key = _fn2[0];
    var val = _fn2[1];

    obj[key] = val;
  });
  return obj;
}