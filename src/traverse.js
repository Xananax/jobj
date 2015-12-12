import {REVERSE,SKIP_ARRAYS,SKIP_OBJECTS} from './consts';

function _traverse(obj,fn,path,key,maxDepth,reverse,useArrays,useObjects){
	const stop = reverse ? fn(obj,key,path) : false;
	if(stop===false){return;}
	if(!maxDepth || path.length < maxDepth){
		if(useArrays && Array.isArray(obj)){
			const length = obj.length;
			var k = 0;
			while(k<length){
				const val = obj[k];
				path.push(k++);
				const stop = _traverse(val,fn,path,k,maxDepth,reverse,useArrays,useObjects);
				if(stop===false){return;}
				path.pop();
			}
		}
		else if(useObjects && obj.constructor == Object){
			const keys = Object.keys(obj);
			const length = keys.length;
			var i = 0;
			while(i<length){
				const k = keys[i++];
				const val = obj[keys[k]];
				const stop = _traverse(val,fn,path,k,maxDepth,reverse,useArrays,useObjects);
				if(stop===false){return;}
				path.pop();
			}
		}
	}
	return reverse ? fn(obj,key,path) : false;
};


/**
 * traverse
 * traverses an object, applying a functor to each element
 * This method operates in a depth-first order, that is, and object's elements
 * will be operated on before the object iself.
 *
 * Functor signature:
 * function(value,key,path){}
 * value: the current value
 * key: the current key
 * path: an array representing the current path. The last element should == key
 *
 * If the functor returns false (not a falsy value) at any moment, operation is
 * stopped.
 *
 * There are three binary flags (exposed on the function itself):
 *
 * - REVERSE: reverses the order; the function is first applied to the parent object
 * - SKIP_ARRAYS: array elements won't be used
 * - SKIP_OBJECTS: object elements won't be used
 *
 * @param  any       obj        The object to traverse
 * @param  Function  fn         The function to apply
 * @param  Int       [opts]     A mix of REVERSE,
 * @param  Int       [maxDepth] maximum recursion. Defaults to Infinity
 * @return undefined
 */
export default function traverse(obj,fn,opts,maxDepth){
	const reverse = opts & REVERSE;
	const useArrays = !(opts & SKIP_ARRAYS);
	const useObjects = !(opts & SKIP_OBJECTS);
	_traverse(obj,fn,[],null,maxDepth,reverse,useArrays,useObjects);
};

traverse.REVERSE = REVERSE;
traverse.SKIP_ARRAYS = SKIP_ARRAYS;
traverse.SKIP_OBJECTS = SKIP_OBJECTS;
