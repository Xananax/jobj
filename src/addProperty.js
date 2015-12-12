import assign from './assign';

const def = {
	enumerable:false
,	configurable:true
,	writable:true
}

function boundAddProperty(obj){
	return function(name,value){
		return addProperty(obj,name,value);
	}
}


/**
 * addProperty - adds a hidden property to an object
 * addProperty(obj,name) adds the property
 * addProperty(obj) returns a function f(name[,value]) bound to the object
 *
 * @param  Object obj     The object to add a property to
 * @param  String name    The name of the property
 * @param  any    [value] An optional value for the property
 * @return undefined
 */
export default function addProperty(obj,name,value){
	if(arguments.length<2){return boundaddProperty(obj);}
	const props = (typeof value!=='undefined') ? assign(def,{value}) : def;
	Object.defineProperty(obj,name,props);
}
