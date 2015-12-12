import traverse from './traverse';
import {REVERSE} from './consts';

function arraysEqual(arr1,arr2){
	return (arr1.length == arr2.length && arr1.every(function(el,i){arr2[i]==el}))
}


/**
 * getNestedProperty - Finds a property in an object with a provided path
 *
 * @param  Object       obj  The object to look into
 * @param  Array|String path The path, either as an array, or a dot separated string
 * @return any               The value, if found, or undefined
 */
export default function getNestedProperty(obj,path){
	if(typeof path == 'string'){path = path.split('.')}
	var answer;
	traverse(
		obj
	,	function(value,key,currPath){
			if(arraysEqual(path,currPath)){
				answer = value;
				return false;
			}
		}
	,	REVERSE
	,	path.length
	)
	return answer;
}
