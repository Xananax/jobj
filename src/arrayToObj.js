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
export default function arrayToObj(arr,fn){
	var obj = {};
	arr.forEach(function(item,i){
		const [key,val] = fn(item,i);
		obj[key] = val;
	})
	return obj;
}
