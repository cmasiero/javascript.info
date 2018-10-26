/**
 * 
 */
function symbol_type(){
	
	console.log("symbol_type");
	
	console.log("'Symbol' value represents a unique identifier.");
	console.log("A value of this type can be created using Symbol()");
	console.log("Symbols are guaranteed to be unique. Even if we create many symbols with the same description");
	
	let id1 = Symbol("id");
	let id2 = Symbol("id");

	console.log(id1 == id2); // false
	
	console.log("*** Symbols DON'T auto-convert to a string");
	console.log("let id = Symbol(\"id\");");
	console.log("alert(id); // TypeError: Cannot convert a Symbol value to a string");
	let id = Symbol("id2");
	console.log(id.toString()); // Symbol(id), now it works
	
	console.log("*** 'Hidden' properties ***");
	console.log("Symbols allow us to create 'hidden' properties of an object, ");
	console.log("that no other part of code can occasionally access or overwrite.");
	
	let user = { name: "John" };
	let id3 = Symbol("id");

	user[id3] = "ID Value";

	console.log("*** What's the benefit over using Symbol(\"id\") over a string \"id\"?");
	console.log("Imagine that another script wants to have its own \"id\" property inside user, for its own purposes.");
	console.log("That may be another JavaScript library, so the scripts are completely unaware of each other.");
	console.log("Then that script can create its own Symbol(\"id\"), like this:");
	
	let id4 = Symbol("id");

	user[id4] = "Their id value";
	
	console.log("*** Symbols in a literal ***");
	console.log("If we want to use a symbol in an object literal, we need square brackets.");
	let id5 = Symbol("id");

	let user1 = {
	  name: "John",
	  [id5]: 123 // not just "id: 123"
	};
	
	console.log("****************************************");
	console.log("*** Symbols are skipped by for...in (NOT IMPORTANT!)");
	
	console.log("****************************************");
	console.log("*** Global symbols ***");
	console.log("Usually all symbols are different, even if they have the same names.");
	console.log("But sometimes we want same-named symbols to be same entities.");
	console.log("For instance, different parts of our application want to access symbol \"id\" meaning exactly the same property.");
	console.log("To achieve that, there exists a global symbol registry");
	console.log("In order to create or read a symbol in the registry, use Symbol.for(key)");
	// read from the global registry
	let id6 = Symbol.for("idGlobal"); // if the symbol did not exist, it is created
	// read it again
	let idAgain = Symbol.for("idGlobal");
	// the same symbol
	console.log( id === idAgain ); // true
	//idAgain = 1000;
	console.log(Symbol.keyFor(id6));
	
//	console.log("****************************************");
//	console.log("*** From https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/");
//	console.log("Giving developers ability to add hooks to their objects, through your API");
	
//	console.log = function (...items) {
//	    var output = '';
//	    for(const item of items) {
//	        if (typeof item[console.Symbols.INSPECT] === 'function') {
//	            output += item[console.Symbols.INSPECT](item);
//	        } else {
//	            output += console.inspect[typeof item](item);
//	        }
//	        output += '  ';
//	    }
//	    process.stdout.write(output + '\n');
//	}
//	
//	
//	// Retreive the magic inspect Symbol from the API's Symbol constants
//	var inspect = console.Symbols.INSPECT; // doesn't work!!!!!!!!!!!!
//	var myVeryOwnObject = {};
//	console.log(myVeryOwnObject); // logs out `{}`
//	myVeryOwnObject[inspect] = function () { return 'DUUUDE'; };
//	console.log(myVeryOwnObject); // logs out `DUUUDE`
	
	console.log("****************************************");
	
	
	
}