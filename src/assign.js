
/**
 * assign - shallow extending of an object properties
 * The operation always returns a new object.
 * This is comparable to Object.assign({},...objects).
 *
 * @param  any ...objects  the objects to merge
 * @return Object          a new object
 */
export default function assign(...props){
	return Object.assign({},...props);
}
