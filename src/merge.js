import assign from './assign'

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
export default function merge(fn,...objects){
	if(!objects.length){return {};}
	if(objects.length==1){return assign(objects[0]);}
	const retObj = {};
	objects.forEach(function(obj){
		if(!obj){return;}
		Object.keys(obj).forEach(function(key){
			const oldVal = retObj[key];
			const newVal = obj[key];
			const ret = fn(newVal,oldVal,key,retObj,obj);
			if(typeof ret !== 'undefined'){
				retObj[key] = ret;
			}
		})
	})
	return retObj;
}
