'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapObj;

var _objForEach = require('./objForEach');

var _objForEach2 = _interopRequireDefault(_objForEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * mapObj - returns an array for a given object by applying a given functor
 * The functor has the signature:
 * function(value,key,object,index)
 * The functor should return a value;
 *
 * @param  Object   obj       the object to operate on
 * @param  Function fn        the functor to apply
 * @param  Any      [thisArg] context for the functor
 * @return Array              the returned array, made of the values returned by
 *                            the functor.
 */
function mapObj(obj, fn, thisArg) {
  var arr = [];
  (0, _objForEach2.default)(obj, function (val, key, obj, i) {
    arr.push(fn.call(thisArg, val, key, obj, i));
  });
  return arr;
}