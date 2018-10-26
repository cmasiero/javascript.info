/**
 * 
 */
function object_methods_this(){
	
	console.log("object_methods_this");
	
	console.log("Objects are usually created to represent entities of the real world, like users, orders and so on:");
	let user = {
		name : "John",
		age : 30
	};
	
	console.log("Method examples");
	user.sayHi = function() {
		console.log("Hello!");
	};

	user.sayHi(); // Hello!

	console.log("*** Method shorthand");
	
	// these objects do the same

	let user2 = {
	  sayHi: function() {
		  console.log("Hello");
	  }
	};

	// method shorthand looks better, right?
	let user3 = {
	  sayHi() { // same as "sayHi: function()"
		  console.log("Hello");
	  }
	};
	
	console.log("****************************************");
	console.log("*** \"this\" in methods ***");
	
	let user4 = {
	  name: "JohnThis",
//	  name: "JohnUser",
//	  name: "JohnOnly",
      age: 30,
	  sayHi() {
//    	  name = "localName"
//    	  console.log("local " + name);
//    	  console.log("this  " + this.name);
//    	  console.log( user4.name ); // leads to an error (TypeError: user4 is null)
    	  console.log( this.name );
	  }

	};

	let admin4 = user4;
	user4 = null; // overwrite to make things obvious
    admin4.sayHi(); 
    
    console.log("****************************************");
	
	console.log("*** \"this\" is not bound ***");
	console.log("There's no syntax error in the code like that:");
	function sayHi2() {
		alert( this.name );
	}
	
	console.log("*** The value of this is evaluated during the run-time. And it can be anything.");
	
	let user5 = { name: "John" };
	let admin5 = { name: "Admin" };

	function sayHi5() {
	  console.log( this.name );
	}

	// use the same functions in two objects
	user5.f = sayHi5;
	admin5.f = sayHi5;

	// these calls have different this
	// "this" inside the function is the object "before the dot"
	user5.f(); // John  (this == user)
	admin5.f(); // Admin  (this == admin)

	admin5['f'](); // Admin (dot or square brackets access the method – doesn't matter)
	
}

function object_methods_this2(){

	console.log("object_methods_this2");
	
	console.log("*** Internals: Reference Type");
	console.log("An intricate method call can lose this, for instance:");
	
	let user = {
			name: "John",
			hi() { console.log(this.name); },
			bye() { console.log("Bye"); }
	};

	user.hi(); // John (the simple call works)

	// now let's call user.hi or user.bye depending on the name
	(user.name == "John" ? user.hi : user.bye)(); // Error!
	
	
	
	// My Test
	console.log("My Test");
	user.name = "Cristiano";
	let x = user.hi();
	// x();
	
	
	console.log("*** Arrow functions have no \"this\" ***");
	
	console.log("Arrow functions are special: they don't have their 'own' this. ");
	console.log("If we reference this from such a function, it's taken from the outer 'normal' function.");
	let user1 = {
			firstName: "Ilya",
			sayHi() {
				let arrow = () => console.log(this.firstName);
			    arrow();
			}
	};

	user1.sayHi(); // Ilya
	
	
	
}
