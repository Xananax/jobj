
/**
 * throttle - throttles a function to emit only every nth second
 *
 * @param  Function fn           The function to throttle
 * @param  Number   [threshhold] A number of ms (defaults to 250)
 * @param  Any      [thisArg]    An optional context for the function
 * @return Function              The throttled function
 */
export default function throttle(fn, threshhold, thisArg) {
	threshhold || (threshhold = 250);
	var last,timer;
	return function throttled(...args){
		var context = thisArg || this;
		var now = +new Date;
		if(last && (now < last + threshhold)){
			clearTimeout(timer);
			timer = setTimeout(
				()=>{
					last = now;
					fn.apply(context, args);
				}
			,	threshhold
			);
		}else{
			last = now;
			fn.apply(context, args);
		}
	};
}
