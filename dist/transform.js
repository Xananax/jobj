'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transform;

var _consts = require('./consts');

/**
 * transform - returns a new object from a given object, applying a functor on
 * every element.
 * The functor has the following signature:
 * function(value,key,object,index)
 * and is expected to return a value.
 *
 * Options:
 * - SKIP_UNDEFINED: if set, undefined values will be stripped from the object,
 * making the functor act as a filter of sorts.
 *
 *
 * @param  Object   obj       The object to operate on
 * @param  Function fn        The functor to apply
 * @param  Int      [opts]    Flags
 * @param  any      [thisArg] A context for the functor
 * @return Object             A new object made of the values returned from the functor
 */
function transform(obj, fn, opts, thisArg) {
  var skipUndefined = opts & _consts.SKIP_UNDEFINED;
  if (!obj) {
    return {};
  }
  var newObj = {};
  Object.keys(obj).forEach(function (key, i) {
    var val = obj[key];
    var res = fn.call(thisArg, val, key, obj, i);
    if (skipUndefined && typeof res == 'undefined') {
      return;
    }
    newObj[key] = res;
  });
  return newObj;
}
transform.SKIP_UNDEFINED = _consts.SKIP_UNDEFINED;