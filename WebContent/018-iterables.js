/**
 * 
 */
function iterables(){
	console.log("*** iterables() ****");
	
	console.log("Iterable objects is a generalization of arrays. That’s a concept that allows to make any object useable in a for..of loop.");
	console.log("* Symbol.iterator");
	console.log("To make an object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).");
	
	let range = {
			from: 1,
			to: 5
	};

	// 1. call to for..of initially calls this
	range[Symbol.iterator] = function() {

	    // ...it returns the iterator object:
	    // 2. Onward, for..of works only with this iterator, asking it for next values
	    return {
	        current: this.from,
	        last: this.to,

	        // 3. next() is called on each iteration by the for..of loop
	        next() {
	            // 4. it should return the value as an object {done:.., value :...}
	            if (this.current <= this.last) {
	                return { done: false, value: this.current++ };
	            } else {
	                return { done: true };
	            }
	        }
	   };
	};

	// now it works!
	for (let num of range) {
		console.log(num); // 1, then 2, 3, 4, 5
	}
			
	console.log("Please note the core feature of iterables: an important separation of concerns:");
	console.log("The range itself does not have the next() method.");
	console.log("Instead, another object, a so-called 'iterator' is created by the call to range[Symbol.iterator](), and it handles the whole iteration.");
	console.log("So, the iterator object is separate from the object it iterates over.");
	console.log("Technically, we may merge them and use range itself as the iterator to make the code simpler.");

	let range1 = {
			from: 1,
			to: 5,

			[Symbol.iterator]() {
				this.current = this.from;
			    return this;
			},

			next() {
				if (this.current <= this.to) {
			      return { done: false, value: this.current++ };
			    } else {
			      return { done: true };
			    }
		   }
	};

    for (let num of range1) {
    	console.log(num); // 1, then 2, 3, 4, 5
	}
    
    console.log("* String is iterable");
    for (let char of "test") {
    	  // triggers 4 times: once for each character
    	  console.log( char ); // t, then e, then s, then t
    }
    
    
    console.log("* Calling an iterator explicitly");
    let str = "Hello";

    // does the same as
    // for (let char of str) alert(char);

    let iterator = str[Symbol.iterator]();

    while (true) {
       let result = iterator.next();
       if (result.done) break;
       console.log(result.value); // outputs characters one by one
    }
			
    console.log("* Iterables and array-likes");
    console.log("  - Iterables are objects that implement the Symbol.iterator method, as described above.");
    console.log("  - Array-likes are objects that have indexes and length, so they look like arrays.");
    console.log("Iterable may be not array-like. And vice versa an array-like may be not iterable.");
    console.log("And here's the object that is array-like, but not iterable:");
    
    let arrayLike = { // has indexes and length => array-like
        0: "Hello",
    	1: "World",
    	length: 2
    };

    // Error (no Symbol.iterator)
    // for (let item of arrayLike) {} (TypeError: arrayLike is not iterable[Ulteriori informazioni])
    
    
    console.log("* Array.from");
    
    
}
	
	
	
	
