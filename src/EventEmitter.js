
/**
 * EventEmitter - Creates a new EventEmitter. This EventEmitter implementation
 * is designed to handle one single event type.
 * You are free to use `new` or just call the function.
 * Takes an option object. The options are:
 *
 * - `onInit()` runs when the EventEmitter instance is created
 * - `onFirst()` runs when the EventEmitter instance has its first listener
 * - `onLast()` runs when the EventEmitter instance removes its last listener
 *
 * Use them to do some initialization and clean up
 * @param  opts         an options object
 * @return EventEmitter an instance of EventEmitter
 */
function EventEmitter(opts){
	if(!(this instanceof EventEmitter)){return new EventEmitter(opts);}
	this.listeners = [];
	this.tempListeners = [];
	this.opts = opts;
	opts && opts.onInit && opts.onInit.call(this);
}

/**
 * getListenerIndex - returns an index for a given listener
 *
 * @param  Function listener the listener to find the index of
 * @return Int               the index, or -1 if not found;
 */
EventEmitter.prototype.getListenerIndex = function getListenerIndex(listener){
	return listeners.indexOf(func);
}


/**
 * addListener - Adds a listener to the pool
 *
 * @param  Function listener
 * @return Int the index of the listener (useful for removeListenerByIndex)
 */
EventEmitter.prototype.addListener = function addListener(listener){
	const index = this.listeners.push(listener) - 1;
	((this.listeners.length==1) && this.opts && this.opts.onFirst && this.opts.onFirst.call(this))
	return index;
}


/**
 * once - Adds a listener that will only fire once
 *
 * @param  Function listener
 * @return undefined
 */
EventEmitter.prototype.once = function once(listener){
	this.tempListeners.push(this.addListener(listener));
}


/**
 * removeListener - removes a listener from the pool
 *
 * @param  Function listener
 * @return undefined
 */
EventEmitter.prototype.removeListener = function removeListener(listener){
	if(!this.listeners.length){return;}
	const index = listeners.indexOf(func);
	this.removeListenerByIndex(index);
}


/**
 * removeListenerByIndex - Removes a listener from the pool
 *
 * @param  Int `index` the index of the listener to remove
 * @return undefined
 */
EventEmitter.prototype.removeListenerByIndex = function removeListenerByIndex(index){
	if(index>=0){
		this.listeners.splice(index,1);
		((!this.listeners.length) && this.opts && this.opts.onLast && this.opts.onLast.call(this));
	}
}


/**
 * emit - Calls all the listeners with the given props
 *
 * @param  any props something to pass to the listeners
 * @return undefined
 */
EventEmitter.prototype.emit = function emit(props){
	this.listeners.forEach(listener=>listener(props));
	this.tempListeners.length && this.tempListeners.forEach(index=>this.removeListenerByIndex(index));
}


/**
 * clean - removes all listeners
 *
 * @return undefined
 */
EventEmitter.prototype.clean = function clean(){
	this.listeners = [];
	this.tempListeners = [];
}

export default EventEmitter;
