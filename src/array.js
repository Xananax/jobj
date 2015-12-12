export function pop(arr){
	return arr.slice(arr,arr.length-1);
}

export function splice(arr,start,deleteCount,...items){
	const newArr = arr.slice();
	newArr.splice(start,deleteCount,...items);
	return newArr;
}

export function push(arr,...objs){
	return arr.concat(objs);
}

export function sort(arr,predicate){
	return arr.slice().sort(predicate);
}

export function reverse(arr){
	return arr.slice().reverse();
}

export function shift(arr){
	const newArr = arr.slice();
	newArr.shift();
	return newArr;
}

export function unshift(arr,...elements){
	const newArr = arr.slice();
	newArr.unshift(...elements);
	return newArr;
}
