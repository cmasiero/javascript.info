/**
 * Map, Set, WeakMap and WeakSet
 */

function map_set_weakMap_weakSet() {
	console.log("*** map_set_weakMap_weakSet ***");

	console.log("*** Map");
	let map = new Map();
	map.set('1', 'str1'); // a string key
	map.set(1, 'num1'); // a numeric key
	map.set(true, 'bool1'); // a boolean key
	// remember the regular Object? it would convert keys to string
	// Map keeps the type, so these two are different:
	console.log(map.get(1)); // 'num1'
	console.log(map.get('1')); // 'str1'
	console.log(map.size); // 3

	console.log("* Map can also use objects as keys.");
	let john = {
		name : "John"
	};
	// for every user, let's store their visits count
	let visitsCountMap = new Map();
	// john is the key for the map
	visitsCountMap.set(john, 123);
	console.log(visitsCountMap.get(john)); // 123

	console.log("* How Map compares keys");
	console.log("To test values for equivalence, Map uses the algorithm SameValueZero.");
	console.log("It is roughly the same as strict equality ===, ");
	console.log("but the difference is that NaN is considered equal to NaN.");
	console.log("So NaN can be used as the key as well.");
	
	console.log("* Every map.set call returns the map itself, so we can 'chain' the calls:");
	console.log("map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');");

	console.log("* Map from Object");
	// array of [key, value] pairs
	let map1 = new Map([
	  ['1',  'str1'],
	  [1,    'num1'],
	  [true, 'bool1']
	]);
	
	console.log("There is a built-in method Object.entries(obj) that ");
	console.log("returns an array of key/value pairs for an object exactly in that format.");
	let map2 = new Map(Object.entries({
		name : "John",
		age : 30
	}));
	

	console.log("* Iteration over Map");
	console.log("map.keys() – returns an iterable for keys,");
	console.log("map.values() – returns an iterable for values,");
	console.log("map.entries() – returns an iterable for entries [key, value], it's used by default in for..of.");
	let recipeMap = new Map([
		  ['cucumber', 500],
		  ['tomatoes', 350],
		  ['onion',    50]
		]);

	// iterate over keys (vegetables)
	for (let vegetable of recipeMap.keys()) {
		console.log(vegetable); // cucumber, tomatoes, onion
	}
    
	// iterate over values (amounts)
	for (let amount of recipeMap.values()) {
		console.log(amount); // 500, 350, 50
	}

	// iterate over [key, value] entries
	for (let entry of recipeMap) { // the same as of recipeMap.entries()
		console.log(entry); // cucumber,500 (and so on)
	}
	
	console.log("Map has a built-in forEach method, similar to Array:");
	recipeMap.forEach( (value, key, map) => {
		console.log(`${key}: ${value}`); // cucumber: 500 etc
	});
	
	
	console.log("*** Set");
	console.log("A Set is a collection of values, where each value may occur only once.");
	console.log("- new Set(iterable) - creates the set, optionally from an array of values (any iterable will do).");
	console.log("- set.add(value) - adds a value, returns the set itself.");
	console.log("- set.delete(value) - removes the value, returns true if value existed at the moment of the call, otherwise false.");
	console.log("- set.has(value) - returns true if the value exists in the set, otherwise false.");
	console.log("- set.clear() - removes everything from the set.");
	console.log("- set.size - is the elements count.");
	
	let set = new Set();
	let john1 = { name: "John" };
	let pete1 = { name: "Pete" };
	let mary1 = { name: "Mary" };

	// visits, some users come multiple times
	set.add(john1);
	set.add(pete1);
	set.add(mary1);
	set.add(john1);
	set.add(mary1);

	// set keeps only unique values
	console.log( set.size ); // 3

	for (let user of set) {
		console.log(user.name); // John (then Pete and Mary)
	}
	
	console.log("* Iteration over Set");
	let set1 = new Set(["oranges", "apples", "bananas"]);

	for (let value of set1) console.log(value);

	console.log("------");
	console.log("The forEach function in the Set has 3 arguments: a value, then again a value, and then the target object."); 
	console.log("Indeed, the same value appears in the arguments twice.");
	console.log("That's for compatibility with Map where forEach has three arguments.");
	console.log("Looks a bit strange, for sure. But may help to replace Map with Set in certain cases with ease, and vice versa.");
	set1.forEach((value, valueAgain, set) => {
	  console.log(value + " - " + valueAgain);
	});
	
	console.log("*** WeakMap and WeakSet");
	
	console.log("WeakSet is a special kind of Set that does not prevent ");
	console.log("JavaScript from removing its items from memory."); 
	console.log("WeakMap is the same thing for Map.");
	
	console.log("The first difference from Map is that WeakMap keys must be objects, not primitive values");
	let weakMap = new WeakMap();
	let obj = {};
	weakMap.set(obj, "ok"); // works fine (object key)
	// can't use a string as the key
	// weakMap.set("test", "Whoops"); // Error, because "test" is not an object
	
	let john2 = { name: "John" };
	let weakMap2 = new WeakMap();
	weakMap2.set(john2, "...");
	john2 = null; // overwrite the reference
	// john is removed from memory!
	
	console.log("WeakMap has only the following methods:");
	console.log("weakMap.get(key)");
	console.log("weakMap.set(key, value)");
	console.log("weakMap.delete(key, value)");
	console.log("weakMap.has(key)");
	
	console.log("The idea of WeakMap is that we can store something for an object that should exist only while the object exists. ");
	
	console.log("* WeakSet behaves similarly:");
	console.log("It is analogous to Set, but we may only add objects to WeakSet (not primitives).");
	console.log("An object exists in the set while it is reachable from somewhere else.");
	console.log("Like Set, it supports add, has and delete, but not size, keys() and no iterations.");
	
	let messages3 = [
	    {text: "Hello", from: "John"},
	    {text: "How goes?", from: "John"},
	    {text: "See you soon", from: "Alice"}
	];
	// fill it with array elements (3 items)
	let unreadSet3 = new WeakSet(messages3);
	// use unreadSet to see whether a message is unread
	console.log(unreadSet3.has(messages3[1])); // true
	// remove it from the set after reading
	unreadSet3.delete(messages3[1]); // true
	// and when we shift our messages history, the set is cleaned up automatically
	messages3.shift();
	
	console.log("->" + messages3);
	
}