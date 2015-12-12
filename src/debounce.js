
/**
 * debounce - debounces a function to run only a certain number of times per second
 * The debounced returned function has a `delay` property that can be changed
 * to obtain dynamic delays.
 *
 * @param  Function fn        a function
 * @param  Number   [delay]   the delay (defaults to 300ms)
 * @param  any      [thisArg] an optional context for the function
 * @return Function           the debounced function
 */
export default function debounce(fn, delay, thisArg){
	delay = delay || 300;
	var timer = null;
	function debounced(...args){
		var context = thisArg || this;
		clearTimeout(timer);
		timer = setTimeout(()=>fn.apply(context, args), debounced.delay);
	};
	debounced.delay = delay;
	return debounced
}
