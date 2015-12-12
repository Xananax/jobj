"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assign;

/**
 * assign - shallow extending of an object properties
 * The operation always returns a new object.
 * This is comparable to Object.assign({},...objects).
 *
 * @param  any ...objects  the objects to merge
 * @return Object          a new object
 */
function assign() {
  var _Object;

  for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }

  return (_Object = Object).assign.apply(_Object, [{}].concat(props));
}