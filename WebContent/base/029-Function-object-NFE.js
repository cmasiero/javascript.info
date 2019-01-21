/**
 * 
 */
function functionObjectNFE() {
	console.log("***** functionObjectNFE *****");
	console.log("A good way to imagine functions is as callable 'action objects'."); 
	console.log("We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.");
	
	console.log("*** The 'name' property");
	function sayHi() {
		  alert("Hi");
	}
	
	console.log(sayHi.name); // sayHi
	console.log("The name-assigning logic is smart. It also assigns the correct name to functions that are used in assignments:");
	let sayHi2 = function() {
		  alert("Hi");
	}
	console.log(sayHi2.name); // sayHi (works!)
	
	
    console.log("It also works if the assignment is done via a default value:");
    console.log("In the specification, this feature is called a 'contextual name.");
    console.log("If the function does not provide one, then in an assignment it is figured out from the context.");
    function f(sayHi = function() {}) {
    	  console.log(sayHi.name); // sayHi (works!)
    }
    f();
    
    
    console.log("Object methods have names too:");
    let user = {
    		sayHi() {
    		    // ...
    		 },
    		 sayBye: function() {
    		    // ...
    		 }
    }

    console.log(user.sayHi.name); // sayHi
    console.log(user.sayBye.name); // sayBye

    console.log("*** The 'length' property");
    function f1(a) {}
    function f2(a, b) {}
    function many(a, b, ...more) {}

    console.log(f1.length); // 1
    console.log(f2.length); // 2
    console.log(many.length); // 2
    
    console.log("*** Custom properties");
    function sayHi() {
    	console.log("Hi");

    	// let's count how many times we run
    	sayHi.counter++; // property counter and a variable let counter ARE TWO UNRELATED THINGS!!!
    }
    sayHi.counter = 0; // initial value
    sayHi(); // Hi
    sayHi(); // Hi
    console.log( `Called ${sayHi.counter} times` ); // Called 2 times
    
    console.log("Function properties can replace closures sometimes.");
    console.log("For instance, we can rewrite the counter function example from the chapter Closure to use a function property:");
    function makeCounter() {
    	  // instead of:
    	  // let count = 0

    	  function counter() {
    	    return counter.count++; // The count is now stored in the function directly, not in its outer Lexical Environment.
    	  };

    	  counter.count = 0;

    	  return counter;
    }

    let counter = makeCounter();
    console.log( counter() ); // 0
    console.log( counter() ); // 1
    
    
    console.log("*** Named Function Expression");
    console.log("Named Function Expression, or NFE, is a term for Function Expressions that have a name.");
    
    //ordinary Function Expression:
    let sayHi3 = function(who) {
    	console.log(`Hello, ${who}`);
    };
    // And add a name to it:
    let sayHi4 = function func(who) {
    	  console.log(`Hello, ${who}`);
    };
    
    
    console.log("There are two special things about the name func:");
    console.log("It allows the function to reference itself internally.");
    console.log("It is not visible outside of the function.");
    
    let sayHi5 = function func(who) {
    	  if (who) {
    	      console.log(`Hello, ${who}`);
    	  } else {
    	     func("Guest"); // use func to re-call itself
    	  }
        };

    sayHi5(); // Hello, Guest

    // But this won't work:
    //func(); // Error, func is not defined (not visible outside of the function)
    
    
    
}