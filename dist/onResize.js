'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = onResize;

var _debounce = require('./debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _EventEmitter = require('./EventEmitter');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _assign = require('./assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function onResizeHandler(previousVal) {
	var obj = {
		win: {
			height: window.innerHeight,
			width: window.innerWidth
		},
		doc: {
			height: document.body.clientHeight,
			width: document.body.clientWidth
		}
	};
	if (!previousVal || obj.win.height !== previousVal.win.height || obj.win.width !== previousVal.win.width || obj.doc.height !== previousVal.doc.height || obj.doc.width !== previousVal.doc.width) {
		return obj;
	}
	return previousVal;
}

var emitter = new _EventEmitter2.default({
	onInit: function onInit() {
		var _this = this;

		this.val = onResizeHandler();
		this.onResizeHandler = (0, _debounce2.default)(function () {
			var newVal = onResizeHandler(_this.val);
			if (newVal !== _this.val) {
				_this.val = newVal;
				_this.emit(_this.val);
			}
		}, 66);
	},
	onFirst: function onFirst() {
		window.addEventListener("resize", this.onResizeHandler);
	},
	onLast: function onLast() {
		window.removeEventListener("resize", this.onResizeHandler);
	}
});

/**
 * onResize - listens to browser resize events. The function is debounced and
 * runs only if there has been a change in value. It also automatically cleans
 * the window event listener when the last callback function has been removed.
 *
 * The listener receives an object:
 * ```js
 * {win:{width,height},doc:{width,height}}
 * ```
 *
 * Calling the function without arguments returns the current value.
 * Calling it with a listener returns:
 * ```js
 * {dispose,win:{width,height},doc:{width,height}}
 * ```
 * `dispose()` can be called to remove the listener.
 *
 * @param  Function `listener` A function to run when the browser size changes
 * @return Object              An object representing the current browser size
 */
function onResize(listener) {
	if (listener) {
		var _ret = (function () {
			var dispose = function dispose() {
				emitter.removeListenerByIndex(index);
			};

			var index = emitter.addListener(listener);

			return {
				v: (0, _assign2.default)(emitter.val, { dispose: dispose })
			};
		})();

		if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	} else {
		return (0, _assign2.default)(emitter.val);
	}
}