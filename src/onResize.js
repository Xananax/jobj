import debounce from './debounce';
import EventEmitter from './EventEmitter';
import assign from './assign';

function onResizeHandler(previousVal){
	const obj = {
		win: {
			height: window.innerHeight
		,	width: window.innerWidth
		}
	,	doc: {
			height: document.body.clientHeight
		,	width: document.body.clientWidth
		}
	}
	if(
		!previousVal ||
		obj.win.height !== previousVal.win.height ||
		obj.win.width !== previousVal.win.width ||
		obj.doc.height !== previousVal.doc.height ||
		obj.doc.width !== previousVal.doc.width
	){
		return obj;
	}
	return previousVal;
}

const emitter = new EventEmitter({
	onInit(){
		this.val = onResizeHandler();
		this.onResizeHandler = debounce(()=>{
			const newVal = onResizeHandler(this.val);
			if(newVal!==this.val){
				this.val = newVal;
				this.emit(this.val)
			}
		},66);
	}
,	onFirst(){
		window.addEventListener("resize",this.onResizeHandler);
	}
,	onLast(){
		window.removeEventListener("resize",this.onResizeHandler);
	}
});


/**
 * onResize - listens to browser resize events. The function is debounced and
 * runs only if there has been a change in value. It also automatically cleans
 * the window event listener when the last callback function has been removed.
 *
 * The listener receives an object:
 * ```js
 * {win:{width,height},doc:{width,height}}
 * ```
 *
 * Calling the function without arguments returns the current value.
 * Calling it with a listener returns:
 * ```js
 * {dispose,win:{width,height},doc:{width,height}}
 * ```
 * `dispose()` can be called to remove the listener.
 *
 * @param  Function `listener` A function to run when the browser size changes
 * @return Object              An object representing the current browser size
 */
export default function onResize(listener){
	if(listener){
		const index = emitter.addListener(listener);
		function dispose(){
			emitter.removeListenerByIndex(index);
		}
		return assign(emitter.val,{dispose});
	}else{
		return assign(emitter.val);
	}
}
