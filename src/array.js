
/**
 * pop - removes the last element from an array
 *
 * @param  Array arr the array
 * @return Array     a transformed array
 */
export function pop(arr){
	return arr.slice(arr,arr.length-1);
}


/**
 * splice - removes/inserts one or more elements from/into an array
 *
 * @param  Array arr          the array
 * @param  {type} start       index to begin splicing at
 * @param  {type} deleteCount number of items to remove
 * @param  {type} ...items    items to add
 * @return Array              a transformed array
 */
export function splice(arr,start,deleteCount,...items){
	const newArr = arr.slice();
	newArr.splice(start,deleteCount,...items);
	return newArr;
}


/**
 * push - adds elements to an array's tail
 *
 * @param  Array arr      the array
 * @param  {type} ...objs objects to add
 * @return Array          a transformed array
 */
export function push(arr,...objs){
	return arr.concat(objs);
}


/**
 * sort - sorts an array according to a given predicate
 *
 * @param  Array arr        the array
 * @param  {type} predicate a function to filter with
 * @return Array            a transformed array
 */
export function sort(arr,predicate){
	return arr.slice().sort(predicate);
}


/**
 * reverse - reverses an array sorting order
 *
 * @param  Array arr the array
 * @return Array     a transformed array
 */
export function reverse(arr){
	return arr.slice().reverse();
}

/**
 * shift removes the first element of an array
 *
 * @param  Array arr the array
 * @return Array     a transformed array
 */
export function shift(arr){
	const newArr = arr.slice();
	newArr.shift();
	return newArr;
}


/**
 * unshift - adds elements to the beginning of an array
 *
 * @param  Array arr          the array
 * @param  {type} ...elements elements to add
 * @return Array              a transformed array
 */
export function unshift(arr,...elements){
	const newArr = arr.slice();
	newArr.unshift(...elements);
	return newArr;
}
