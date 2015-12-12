#JOBJ

A collection of utilities to work with objects. Lighter than most, and does what I want
Particularly useful to work with immutables, as all functions return new objects.

I was mainly tired of always re-writting the same little functions in every project.

# Methods

## Functions

<dl>
<dt><a href="#addProperty">addProperty(Object, String, any)</a> ⇒</dt>
<dd><p>addProperty - adds a hidden property to an object
addProperty(obj,name) adds the property
addProperty(obj) returns a function f(name[,value]) bound to the object</p>
</dd>
<dt><a href="#pop">pop(Array)</a> ⇒</dt>
<dd><p>pop - removes the last element from an array</p>
</dd>
<dt><a href="#splice">splice(Array, start, deleteCount)</a> ⇒</dt>
<dd><p>splice - removes/inserts one or more elements from/into an array</p>
</dd>
<dt><a href="#push">push(Array)</a> ⇒</dt>
<dd><p>push - adds elements to an array&#39;s tail</p>
</dd>
<dt><a href="#sort">sort(Array, predicate)</a> ⇒</dt>
<dd><p>sort - sorts an array according to a given predicate</p>
</dd>
<dt><a href="#reverse">reverse(Array)</a> ⇒</dt>
<dd><p>reverse - reverses an array sorting order</p>
</dd>
<dt><a href="#shift">shift(Array)</a> ⇒</dt>
<dd><p>shift removes the first element of an array</p>
</dd>
<dt><a href="#unshift">unshift(Array)</a> ⇒</dt>
<dd><p>unshift - adds elements to the beginning of an array</p>
</dd>
<dt><a href="#arrayToObj">arrayToObj(Array, Function)</a> ⇒</dt>
<dd><p>arrayToObj - transforms an array into an object, applying the given functor on
each element.
The functor has the following signature
function(value,index)
And should return an array of two elements: [key,value], that will be used
to create the final object</p>
</dd>
<dt><a href="#assign">assign(any)</a> ⇒</dt>
<dd><p>assign - shallow extending of an object properties
The operation always returns a new object.
This is comparable to Object.assign({},...objects).</p>
</dd>
<dt><a href="#debounce">debounce(Function, Number, any)</a> ⇒</dt>
<dd><p>debounce - debounces a function to run only a certain number of times per second
The debounced returned function has a <code>delay</code> property that can be changed
to obtain dynamic delays.</p>
</dd>
<dt><a href="#EventEmitter">EventEmitter(opts)</a> ⇒</dt>
<dd><p>EventEmitter - Creates a new EventEmitter. This EventEmitter implementation
is designed to handle one single event type.
You are free to use <code>new</code> or just call the function.
Takes an option object. The options are:</p>
<ul>
<li><code>onInit()</code> runs when the EventEmitter instance is created</li>
<li><code>onFirst()</code> runs when the EventEmitter instance has its first listener</li>
<li><code>onLast()</code> runs when the EventEmitter instance removes its last listener</li>
</ul>
<p>Use them to do some initialization and clean up</p>
</dd>
<dt><a href="#getNestedProperty">getNestedProperty(Object, Array|String)</a> ⇒</dt>
<dd><p>getNestedProperty - Finds a property in an object with a provided path</p>
</dd>
<dt><a href="#mapObj">mapObj(Object, Function, Any)</a> ⇒</dt>
<dd><p>mapObj - returns an array for a given object by applying a given functor
The functor has the signature:
function(value,key,object,index)
The functor should return a value;</p>
</dd>
<dt><a href="#merge">merge(Function, Object)</a> ⇒</dt>
<dd><p>merge - runs a functor on every passed objects, merging values from left to right
This functor has the following signature:
function(value,previousValue,key,object,currentObject)
Where:</p>
<ul>
<li><code>value</code> is the current value (you probably want to return that)</li>
<li><code>previousValue</code> is the value that was previously assigned</li>
<li><code>key</code> is the name of the current key</li>
<li><code>object</code> is the final object in construction</li>
<li><code>currentObject</code> is the object being currently operated on
not returning a value (that is, returning undefined) will NOT add the value
to the object.</li>
</ul>
</dd>
<dt><a href="#objFilter">objFilter(Object, Function|Array, Int, any)</a> ⇒</dt>
<dd><p>objFilter - Filters an object&#39;s properties given a predicate.
This predicate can either be:</p>
<ul>
<li>an array of strings: keys that are not in the array will be removed</li>
<li>a function of signature function(value,key,object,index): should return <code>true</code> or <code>false</code></li>
</ul>
<p>Options:</p>
<ul>
<li>REVERSE: reverses the results. In this case, values that are NOT in the<pre><code>     provided array will be included (or values for which the functor
     returns `false`).
</code></pre></li>
</ul>
</dd>
<dt><a href="#objForEach">objForEach(Object, Function, any)</a> ⇒</dt>
<dd><p>objForEach - iterates over an object&#39;s properties, applying a functor on each
element.
The functor has the following signature:
function(value,key,object,index)</p>
</dd>
<dt><a href="#onResize">onResize(Function)</a> ⇒</dt>
<dd><p>onResize - listens to browser resize events. The function is debounced and
runs only if there has been a change in value. It also automatically cleans
the window event listener when the last callback function has been removed.</p>
<p>The listener receives an object:</p>
<pre><code class="language-javascript">{win:{width,height},doc:{width,height}}
</code></pre>
<p>Calling the function without arguments returns the current value.
Calling it with a listener returns:</p>
<pre><code class="lang-js">{dispose,win:{width,height},doc:{width,height}}
</code></pre>
<p><code>dispose()</code> can be called to remove the listener.</p>
</dd>
<dt><a href="#throttle">throttle(Function, Number, Any)</a> ⇒</dt>
<dd><p>throttle - throttles a function to emit only every nth second</p>
</dd>
<dt><a href="#transform">transform(Object, Function, Int, any)</a> ⇒</dt>
<dd><p>transform - returns a new object from a given object, applying a functor on
every element.
The functor has the following signature:
function(value,key,object,index)
and is expected to return a value.</p>
<p>Options:</p>
<ul>
<li>SKIP_UNDEFINED: if set, undefined values will be stripped from the object,
making the functor act as a filter of sorts.</li>
</ul>
</dd>
<dt><a href="#traverse">traverse(any, Function, Int, Int)</a> ⇒</dt>
<dd><p>traverse
traverses an object, applying a functor to each element
This method operates in a depth-first order, that is, and object&#39;s elements
will be operated on before the object iself.</p>
<p>Functor signature:
function(value,key,path){}
value: the current value
key: the current key
path: an array representing the current path. The last element should == key</p>
<p>If the functor returns false (not a falsy value) at any moment, operation is
stopped.</p>
<p>There are three binary flags (exposed on the function itself):</p>
<ul>
<li>REVERSE: reverses the order; the function is first applied to the parent object</li>
<li>SKIP_ARRAYS: array elements won&#39;t be used</li>
<li>SKIP_OBJECTS: object elements won&#39;t be used</li>
</ul>
</dd>
</dl>

<a name="addProperty"></a>
## addProperty(Object, String, any) ⇒
addProperty - adds a hidden property to an object
addProperty(obj,name) adds the property
addProperty(obj) returns a function f(name[,value]) bound to the object

**Kind**: global function  
**Returns**: undefined  

| Param | Description |
| --- | --- |
| Object | obj     The object to add a property to |
| String | name    The name of the property |
| any | [value] An optional value for the property |

<a name="pop"></a>
## pop(Array) ⇒
pop - removes the last element from an array

**Kind**: global function  
**Returns**: Array     a transformed array  

| Param | Description |
| --- | --- |
| Array | arr the array |

<a name="splice"></a>
## splice(Array, start, deleteCount) ⇒
splice - removes/inserts one or more elements from/into an array

**Kind**: global function  
**Returns**: Array              a transformed array  

| Param | Type | Description |
| --- | --- | --- |
| Array |  | arr          the array |
| start | <code>type</code> | index to begin splicing at |
| deleteCount | <code>type</code> | number of items to remove |
| ...items | <code>type</code> | items to add |

<a name="push"></a>
## push(Array) ⇒
push - adds elements to an array's tail

**Kind**: global function  
**Returns**: Array          a transformed array  

| Param | Type | Description |
| --- | --- | --- |
| Array |  | arr      the array |
| ...objs | <code>type</code> | objects to add |

<a name="sort"></a>
## sort(Array, predicate) ⇒
sort - sorts an array according to a given predicate

**Kind**: global function  
**Returns**: Array            a transformed array  

| Param | Type | Description |
| --- | --- | --- |
| Array |  | arr        the array |
| predicate | <code>type</code> | a function to filter with |

<a name="reverse"></a>
## reverse(Array) ⇒
reverse - reverses an array sorting order

**Kind**: global function  
**Returns**: Array     a transformed array  

| Param | Description |
| --- | --- |
| Array | arr the array |

<a name="shift"></a>
## shift(Array) ⇒
shift removes the first element of an array

**Kind**: global function  
**Returns**: Array     a transformed array  

| Param | Description |
| --- | --- |
| Array | arr the array |

<a name="unshift"></a>
## unshift(Array) ⇒
unshift - adds elements to the beginning of an array

**Kind**: global function  
**Returns**: Array              a transformed array  

| Param | Type | Description |
| --- | --- | --- |
| Array |  | arr          the array |
| ...elements | <code>type</code> | elements to add |

<a name="arrayToObj"></a>
## arrayToObj(Array, Function) ⇒
arrayToObj - transforms an array into an object, applying the given functor on
each element.
The functor has the following signature
function(value,index)
And should return an array of two elements: [key,value], that will be used
to create the final object

**Kind**: global function  
**Returns**: Object        the object, as returned from the functor  

| Param | Description |
| --- | --- |
| Array | arr  the original array |
| Function | fn   description |

<a name="assign"></a>
## assign(any) ⇒
assign - shallow extending of an object properties
The operation always returns a new object.
This is comparable to Object.assign({},...objects).

**Kind**: global function  
**Returns**: Object          a new object  

| Param | Description |
| --- | --- |
| any | ...objects  the objects to merge |

<a name="debounce"></a>
## debounce(Function, Number, any) ⇒
debounce - debounces a function to run only a certain number of times per second
The debounced returned function has a `delay` property that can be changed
to obtain dynamic delays.

**Kind**: global function  
**Returns**: Function           the debounced function  

| Param | Description |
| --- | --- |
| Function | fn        a function |
| Number | [delay]   the delay (defaults to 300ms) |
| any | [thisArg] an optional context for the function |

<a name="EventEmitter"></a>
## EventEmitter(opts) ⇒
EventEmitter - Creates a new EventEmitter. This EventEmitter implementation
is designed to handle one single event type.
You are free to use `new` or just call the function.
Takes an option object. The options are:

- `onInit()` runs when the EventEmitter instance is created
- `onFirst()` runs when the EventEmitter instance has its first listener
- `onLast()` runs when the EventEmitter instance removes its last listener

Use them to do some initialization and clean up

**Kind**: global function  
**Returns**: EventEmitter an instance of EventEmitter  

| Param | Description |
| --- | --- |
| opts | an options object |


* [EventEmitter(opts)](#EventEmitter) ⇒
    * [.getListenerIndex(Function)](#EventEmitter+getListenerIndex) ⇒
    * [.addListener(Function)](#EventEmitter+addListener) ⇒
    * [.once(Function)](#EventEmitter+once) ⇒
    * [.removeListener(Function)](#EventEmitter+removeListener) ⇒
    * [.removeListenerByIndex(Int)](#EventEmitter+removeListenerByIndex) ⇒
    * [.emit(any)](#EventEmitter+emit) ⇒
    * [.clean()](#EventEmitter+clean) ⇒

<a name="EventEmitter+getListenerIndex"></a>
### eventEmitter.getListenerIndex(Function) ⇒
getListenerIndex - returns an index for a given listener

**Kind**: instance method of <code>[EventEmitter](#EventEmitter)</code>  
**Returns**: Int               the index, or -1 if not found;  

| Param | Description |
| --- | --- |
| Function | listener the listener to find the index of |

<a name="EventEmitter+addListener"></a>
### eventEmitter.addListener(Function) ⇒
addListener - Adds a listener to the pool

**Kind**: instance method of <code>[EventEmitter](#EventEmitter)</code>  
**Returns**: Int the index of the listener (useful for removeListenerByIndex)  

| Param | Description |
| --- | --- |
| Function | listener |

<a name="EventEmitter+once"></a>
### eventEmitter.once(Function) ⇒
once - Adds a listener that will only fire once

**Kind**: instance method of <code>[EventEmitter](#EventEmitter)</code>  
**Returns**: undefined  

| Param | Description |
| --- | --- |
| Function | listener |

<a name="EventEmitter+removeListener"></a>
### eventEmitter.removeListener(Function) ⇒
removeListener - removes a listener from the pool

**Kind**: instance method of <code>[EventEmitter](#EventEmitter)</code>  
**Returns**: undefined  

| Param | Description |
| --- | --- |
| Function | listener |

<a name="EventEmitter+removeListenerByIndex"></a>
### eventEmitter.removeListenerByIndex(Int) ⇒
removeListenerByIndex - Removes a listener from the pool

**Kind**: instance method of <code>[EventEmitter](#EventEmitter)</code>  
**Returns**: undefined  

| Param | Description |
| --- | --- |
| Int | `index` the index of the listener to remove |

<a name="EventEmitter+emit"></a>
### eventEmitter.emit(any) ⇒
emit - Calls all the listeners with the given props

**Kind**: instance method of <code>[EventEmitter](#EventEmitter)</code>  
**Returns**: undefined  

| Param | Description |
| --- | --- |
| any | props something to pass to the listeners |

<a name="EventEmitter+clean"></a>
### eventEmitter.clean() ⇒
clean - removes all listeners

**Kind**: instance method of <code>[EventEmitter](#EventEmitter)</code>  
**Returns**: undefined  
<a name="getNestedProperty"></a>
## getNestedProperty(Object, Array|String) ⇒
getNestedProperty - Finds a property in an object with a provided path

**Kind**: global function  
**Returns**: any               The value, if found, or undefined  

| Param | Description |
| --- | --- |
| Object | obj  The object to look into |
| Array|String | path The path, either as an array, or a dot separated string |

<a name="mapObj"></a>
## mapObj(Object, Function, Any) ⇒
mapObj - returns an array for a given object by applying a given functor
The functor has the signature:
function(value,key,object,index)
The functor should return a value;

**Kind**: global function  
**Returns**: Array              the returned array, made of the values returned by
                           the functor.  

| Param | Description |
| --- | --- |
| Object | obj       the object to operate on |
| Function | fn        the functor to apply |
| Any | [thisArg] context for the functor |

<a name="merge"></a>
## merge(Function, Object) ⇒
merge - runs a functor on every passed objects, merging values from left to right
This functor has the following signature:
function(value,previousValue,key,object,currentObject)
Where:
- `value` is the current value (you probably want to return that)
- `previousValue` is the value that was previously assigned
- `key` is the name of the current key
- `object` is the final object in construction
- `currentObject` is the object being currently operated on
not returning a value (that is, returning undefined) will NOT add the value
to the object.

**Kind**: global function  
**Returns**: Object              The final object  

| Param | Description |
| --- | --- |
| Function | fn         The functor to use |
| Object | ...objects Objects to operate on |

<a name="objFilter"></a>
## objFilter(Object, Function|Array, Int, any) ⇒
objFilter - Filters an object's properties given a predicate.
This predicate can either be:
- an array of strings: keys that are not in the array will be removed
- a function of signature function(value,key,object,index): should return `true` or `false`

Options:
- REVERSE: reverses the results. In this case, values that are NOT in the
           provided array will be included (or values for which the functor
           returns `false`).

**Kind**: global function  
**Returns**: Object                   A new object  

| Param | Description |
| --- | --- |
| Object | obj       The object to filter |
| Function|Array | predicate Either a function, or an array of keys |
| Int | [opts]    flags for the function |
| any | [thisArg] A context for the function |

<a name="objForEach"></a>
## objForEach(Object, Function, any) ⇒
objForEach - iterates over an object's properties, applying a functor on each
element.
The functor has the following signature:
function(value,key,object,index)

**Kind**: global function  
**Returns**: undefined  

| Param | Description |
| --- | --- |
| Object | obj       The object to iterate on |
| Function | fn        The functor to apply |
| any | [thisArg] A context for the functor |

<a name="onResize"></a>
## onResize(Function) ⇒
onResize - listens to browser resize events. The function is debounced and
runs only if there has been a change in value. It also automatically cleans
the window event listener when the last callback function has been removed.

The listener receives an object:
```js
{win:{width,height},doc:{width,height}}
```

Calling the function without arguments returns the current value.
Calling it with a listener returns:
```js
{dispose,win:{width,height},doc:{width,height}}
```
`dispose()` can be called to remove the listener.

**Kind**: global function  
**Returns**: Object              An object representing the current browser size  

| Param | Description |
| --- | --- |
| Function | `listener` A function to run when the browser size changes |

<a name="throttle"></a>
## throttle(Function, Number, Any) ⇒
throttle - throttles a function to emit only every nth second

**Kind**: global function  
**Returns**: Function              The throttled function  

| Param | Description |
| --- | --- |
| Function | fn           The function to throttle |
| Number | [threshhold] A number of ms (defaults to 250) |
| Any | [thisArg]    An optional context for the function |

<a name="transform"></a>
## transform(Object, Function, Int, any) ⇒
transform - returns a new object from a given object, applying a functor on
every element.
The functor has the following signature:
function(value,key,object,index)
and is expected to return a value.

Options:
- SKIP_UNDEFINED: if set, undefined values will be stripped from the object,
making the functor act as a filter of sorts.

**Kind**: global function  
**Returns**: Object             A new object made of the values returned from the functor  

| Param | Description |
| --- | --- |
| Object | obj       The object to operate on |
| Function | fn        The functor to apply |
| Int | [opts]    Flags |
| any | [thisArg] A context for the functor |

<a name="traverse"></a>
## traverse(any, Function, Int, Int) ⇒
traverse
traverses an object, applying a functor to each element
This method operates in a depth-first order, that is, and object's elements
will be operated on before the object iself.

Functor signature:
function(value,key,path){}
value: the current value
key: the current key
path: an array representing the current path. The last element should == key

If the functor returns false (not a falsy value) at any moment, operation is
stopped.

There are three binary flags (exposed on the function itself):

- REVERSE: reverses the order; the function is first applied to the parent object
- SKIP_ARRAYS: array elements won't be used
- SKIP_OBJECTS: object elements won't be used

**Kind**: global function  
**Returns**: undefined  

| Param | Description |
| --- | --- |
| any | obj        The object to traverse |
| Function | fn         The function to apply |
| Int | [opts]     A mix of REVERSE, |
| Int | [maxDepth] maximum recursion. Defaults to Infinity |


Additionally, it provides the following immutable replacements for mutative array functions:
`push`,`pop`,`splice`,`sort`,`reverse`,`shift`, and `unshift`.
All functions work like their native counterparts, but take an `array` argument first
(they also return an array instead of, say, the `length` property for `push`).

# Install

```sh
npm install jobj
```

## License
MIT
