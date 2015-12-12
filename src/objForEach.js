
/**
 * objForEach - iterates over an object's properties, applying a functor on each
 * element.
 * The functor has the following signature:
 * function(value,key,object,index)
 *
 * @param  Object   obj       The object to iterate on
 * @param  Function fn        The functor to apply
 * @param  any      [thisArg] A context for the functor
 * @return undefined
 */
export default function objForEach(obj,fn,thisArg){
	if(!obj){return;}
	Object.keys(obj).forEach(function(key,i){
		const val = obj[key];
		fn.call(thisArg,val,key,obj,i);
	});
}
