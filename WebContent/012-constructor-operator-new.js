/**
 * 
 */
function constructor_operator_new(){
	
	console.log("*** constructor_operator_new ***");
	
	console.log("*** Constructor function");
	function User(name) { // They are named with capital letter first.
		  this.name = name;
		  this.isAdmin = false;
	}
	let user = new User("Jack"); // They should be executed only with "new" operator. 
	console.log(user.name); // Jack
	console.log(user.isAdmin); // false
	
	console.log("***So the result of new User(\"Jack\") is the same object as:");
	let user2 = {
			name: "Jack",
			isAdmin: false
	};
	
	
	console.log("*** new function() { ... }");
	console.log("If we have many lines of code all about creation of a single complex object, we can wrap them in constructor function, like this:");
	let user3 = new function() {
		  this.name = "John";
		  this.isAdmin = false;

		  // ...other code for user creation
		  // maybe complex logic and statements
		  // local variables etc
    };
    
    console.log("THE CONSTRUCTOR CAN’T BE CALLED AGAIN, because it is not saved anywhere, just created and called.");
    console.log("So this trick aims to encapsulate the code that constructs the single object, without future reuse.");
	
    console.log("****************************************");
	console.log("*** Dual-syntax constructors: new.target");
	console.log("*** Advanced stuff *** (Syntax rarely used)");
	
	function User4() {
		console.log("* " + new.target);
	}

	// without "new":
	User4(); // undefined

	// with "new":
	new User4(); // function User { ... }
	
	console.log("*** That can be used to allow both new and regular calls to work the same. That is, create the same object:");
	
	function User5(name) {
		if (!new.target) { // if you run me without new
			return new User(name); // ...I will add new for you
		}
		this.name = name;
	}

	let john = User5("John"); // redirects call to new User
	console.log("->" + john.name); // John
	
	console.log("*** Return from constructors ***");
	console.log("* Usually, constructors do not have a return statement");
	console.log("* if there is a return statement:");
	console.log("- If return is called with object, then it is returned instead of this");
	console.log("- If return is called with a primitive, it’s ignored.");
	
	function BigUser() {
		this.name = "John";
		return { name: "Godzilla" };  // <-- returns an object
	}
	console.log( "new BigUser().name " +  new BigUser().name );  // Godzilla, got that object ^^
	
	function SmallUser() {
		this.name = "John";
		return; // finishes the execution, returns this
	}
	console.log( "new SmallUser().name " + new SmallUser().name );  // John
	
    console.log("****************************************");
	console.log("*** Methods in constructor ***");
	console.log("*Using constructor functions to create objects gives a great deal of flexibility");
	
	function User6(name) {
		this.name = name;
		this.sayHi = function() {
			console.log( "*** My name is: " + this.name );
		};
	}

	let john6 = new User6("John");
	john6.sayHi(); // My name is: John

	/*
	  john = {
	      name: "John",
		  sayHi: function() { ... }
	  }
	*/
	
	
	
}