/**
 * Object.keys, values, entries
 */

function object_keys_values_entries(){
	
	console.log("*** object_keys_values_entries ***");

	console.log("For plain objects, the following methods are available:");
	console.log("Object.keys(obj)      - returns an array of keys.");
	console.log("Object.values(obj)    - returns an array of values.");
	console.log("Object.entries(obj)   - returns an array of [key, value] pairs.");
	
	
	let user = {
			name: "John",
			age: 30
			};
	
	console.log("Object.keys(user)    = " + Object.keys(user));
	console.log("Object.values(user)  = " + Object.values(user));
	console.log("Object.entries(user) = " + Object.entries(user));
	
	console.log("****************************************");
	
	console.log("Example loop:");
	// loop over values
	for (let value of Object.values(user)) {
	  console.log(value); // John, then 30
	}
	
	console.log("****************************************");
	
	console.log("Just like a for..in loop, these methods ignore properties that use Symbol(...) as keys.");
	console.log("if we want symbolic keys too, then there's a separate method Object.getOwnPropertySymbols"); 
	console.log("that returns an array of only symbolic keys."); 
	console.log("Also, the method Reflect.ownKeys(obj) returns all keys.");
	
}