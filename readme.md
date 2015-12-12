#JOBJ

A collection of utilities to work with objects. Lighter than most, and does what I want
Particularly useful to work with immutables, as all functions return new objects.

## Methods

### arrayToObj(array,callback)

### assign(...objects)

### getNestedProperty(object,path)

### mapObj(object,callback[,thisArg])

### objFilter(object,predicate|callback[,flags[,thisArg]])

### objForEach(object,callback[,thisArg])

### transform(object,callback[,flags[,thisArg]])

### traverse(object,callback[,flags[,maxDepth]])

Additionally, it provides the following immutable replacements for mutative array functions:
`push`,`pop`,`splice`,`sort`,`reverse`,`shift`, and `unshift`.
All functions work like their native counterparts, but take an `array` argument first
(they also return an array instead of, say, the `length` property for `push`).
