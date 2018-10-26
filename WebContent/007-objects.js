/**
 * 
 */
function objects(){
	
	console.log("objects");
	
	console.log("let user = new Object(); // \"object constructor\" syntax");
	console.log("let user = {};  // \"object literal\" syntax");
	
	console.log("****************************************");
	let user = { // an object
			name : "John", // by key "name" store value "John"
			age : 30 // by key "age" store value 30
			//"likes birds": true  // multiword property name must be quoted (DOESN'T WORK ON CHROME/FIREFOX)
	};
	console.log("user.name : " + user.name);
	console.log("user.age  : " + user.age);
	
	console.log("****************************************");
	console.log("The value can be of any type. Let's add a boolean one:");
	user.isAdmin = true;
	console.log("user.isAdmin " + user.isAdmin);
	console.log("To remove a property, we can use delete operator:");
	console.log("user.age " + user.age);
	delete user.age;
	console.log("user.age " + user.age);
	console.log("We can also use multiword property names, but then they must be quoted: DOESN'T WORK ON CHROME/FIREFOX");
	
	console.log("****************************************");
	console.log("Computed properties");
	let fruit = prompt("Which fruit to buy?", "apple");
	let bag = {
	  [fruit]: 5, // the name of the property is taken from the variable fruit
	};
	alert( bag.apple ); // 5 if fruit="apple"
	console.log("The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.");
	console.log("So, if a visitor enters \"apple\", bag will become {apple: 5}.");
	
	console.log("****************************************");
	console.log("We can use more complex expressions inside square brackets:");
	let fruit2 = 'apple';
	let bag2 = {
	  [fruit2 + 'Computers']: 5 // bag.appleComputers = 5
	};
	console.log("bag2.appleComputers : " + bag2.appleComputers);
	
	console.log("****************************************");
	console.log("Property value shorthand");
	function makeUser(name, age) {
		return {
			name: name,
		    age: age
		    // ...other properties
		};
	}
	
	let user3 = makeUser("John", 30);
	alert(user.name); // John
	console.log("user3.name: " + user3.name);
	
	function makeUser2(name, age) {
		return {
			name, // same as name: name
		    age   // same as age: age
		    // ...
		};
	}
	
	let user4 = {
			  name,  // same as name:name
			  age: 30
			};

	console.log("****************************************");
	
	console.log("*** Existence check ***");
	let user5 = {};
	console.log( user5.noSuchProperty === undefined ); // true means "no such property"
	
	console.log("There also exists a special operator \"in\" to check for the existence of a property.");
	console.log("\"key\" in object");
	let user6 = { name: "John", age: 30 };

	console.log( "age" in user6 ); // true, user.age exists
	console.log( "blabla" in user6 ); // false, user.blabla doesn't exist
	
	console.log("If we omit quotes, that would mean a variable containing the actual name will be tested. For instance:");
	let user7 = { age: 30 };
	let key = "age";
	console.log( key in user7 ); // true, takes the name from key and checks for such property
	
	console.log("****************************************");
	
	
	console.log("*** The 'for...in' loop ***");
	
	let user8 = {
			name: "John",
			age: 30,
			isAdmin: true
	};

	for(let key in user8) {
		// keys
		console.log( key );  // name, age, isAdmin
		// values for the keys
		console.log( user8[key] ); // John, 30, true
	}
	
	console.log("*** Ordered like an object ***");
	let codes = {
			"49": "Germany",
			"41": "Switzerland",
			"44": "Great Britain",
			// ..,
			"1": "USA"
	};

	for(let code in codes) {
		console.log(code); // 1, 41, 44, 49
	}
	
	console.log("*** if the keys are non-integer, then they are listed in the creation order, for instance ***");
	let user9 = {
			name: "John",
			surname: "Smith"
    };
	user9.age = 25; // add one more

	// non-integer properties are listed in the creation order
	for (let prop in user9) {
		console.log( prop ); // name, surname, age
    }
	
	console.log("*** So, to fix the issue with the phone codes, we can 'cheat' by making the codes non-integer. Adding a plus '+' sign before each code is enough. ***");
	let codes1 = {
			"+49": "Germany",
			"+41": "Switzerland",
			"+44": "Great Britain",
			// ..,
			"+1": "USA"
	};

	for(let code in codes1) {
		console.log( +code ); // 49, 41, 44, 1 (the codes non-integer with +)
	}
	
	console.log("****************************************");
	console.log("*** Copying by reference ***");
	console.log("A variable stores not the object itself, but its 'address in memory', in other words 'a reference' to it.");
	let user10 = { name: 'John' };
	let admin10 = user10;
	admin10.name = 'Pete'; // changed by the "admin" reference
	console.log(user10.name); // 'Pete', changes are seen from the "user" reference
	
	console.log("*** Comparison by reference ***");
	console.log("The equality == and strict equality === operators for objects work exactly the same.");
	let a = {};
	let b = a; // copy the reference
	console.log( a == b ); // true, both variables reference the same object
	console.log( a === b ); // true
	console.log("For comparisons like obj1 > obj2 or for a comparison against a primitive obj == 5, objects are converted to primitives");
	
	
	console.log("****************************************");
	console.log("*** Const object ***");
	console.log("An object declared as const can be changed.");
	const user11 = {
			name: "John"
    };
	user11.age = 25; 
	console.log(user11.age); // 25
	
	console.log("The const would give an error if we try to set user to something else, for instance:");
	const user12 = {
			name: "John"
    };

	// Error (can't reassign user) // Code don't continue, so commented
//	user12 = {
//			name: "Pete"
//    };
	
	user12.name = "xxx";
	console.log("--> " + user12.name); // This is ok
	
	console.log("****************************************");
	
	console.log("*** Cloning and merging, Object.assign ***");
	
	
}

