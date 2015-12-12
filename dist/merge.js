'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

var _assign = require('./assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * merge - runs a functor on every passed objects, merging values from left to right
 * This functor has the following signature:
 * function(value,previousValue,key,object,currentObject)
 * Where:
 * - `value` is the current value (you probably want to return that)
 * - `previousValue` is the value that was previously assigned
 * - `key` is the name of the current key
 * - `object` is the final object in construction
 * - `currentObject` is the object being currently operated on
 * not returning a value (that is, returning undefined) will NOT add the value
 * to the object.
 *
 * @param  Function fn         The functor to use
 * @param  Object   ...objects Objects to operate on
 * @return Object              The final object
 */
function merge(fn) {
  for (var _len = arguments.length, objects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objects[_key - 1] = arguments[_key];
  }

  if (!objects.length) {
    return {};
  }
  if (objects.length == 1) {
    return (0, _assign2.default)(objects[0]);
  }
  var retObj = {};
  objects.forEach(function (obj) {
    if (!obj) {
      return;
    }
    Object.keys(obj).forEach(function (key) {
      var oldVal = retObj[key];
      var newVal = obj[key];
      var ret = fn(newVal, oldVal, key, retObj, obj);
      if (typeof ret !== 'undefined') {
        retObj[key] = ret;
      }
    });
  });
  return retObj;
}