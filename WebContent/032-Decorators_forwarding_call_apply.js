/**
 * 
 */
function transparentCaching() {
	console.log("[transparentCaching]");


	function slow(x) {
		// there can be a heavy CPU-intensive job here
		console.log(`Called with ${x}`);
		return x;
	}

	function cachingDecorator(func) {
		let cache = new Map();

		return function(x) {
			if (cache.has(x)) { // if the result is in the map
				return cache.get(x); // return it
			}

			let result = func(x); // otherwise call func

			cache.set(x, result); // and cache (remember) the result
			return result;
		};
	}

	slow = cachingDecorator(slow);

	console.log(slow(1)); // slow(1) is cached
	console.log("Again: " + slow(1)); // the same

	console.log(slow(2)); // slow(2) is cached
	console.log("Again: " + slow(2)); // the same as the previous line

}

function usingFuncCall_for_the_context(){
	console.log("[usingFuncCall_for_the_context]");
	
	console.log("* The caching decorator mentioned above (method decoratorsForwardingCallApply) is not suited to work with object methods.");
	
	// we'll make worker.slow caching
	let worker = {
	  someMethod() {
	    return 1;
	  },

	  slow(x) {
	    // actually, there can be a scary CPU-heavy task here
	    console.log("Called with " + x);
	    return x * this.someMethod(); // (*)
	  }
	};

	// same code as before
	function cachingDecorator(func) {
	  let cache = new Map();
	  return function(x) {
	    if (cache.has(x)) {
	      return cache.get(x);
	    }
	    let result = func(x); // (**)
	    cache.set(x, result);
	    return result;
	  };
	}

	console.log( worker.slow(1) ); // the original method works

	worker.slow = cachingDecorator(worker.slow); // now make it caching

	try {
	    console.log( worker.slow(2) ); // Whoops! Error: Cannot read property
                                       // 'someMethod' of undefined
    } catch (e) {
        console.log(e);
    }
	
	console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");
	
	
	console.log("* There's a special built-in function method func.call(context, …args) that allows to call a function explicitly setting this.");
	console.log("The syntax: func.call(context, arg1, arg2, ...)");
	
	console.log("To put it simply, these two calls do almost the same:");
	console.log("func(1, 2, 3);");
	console.log("func.call(obj, 1, 2, 3)");
	
	let worker2 = {
	        someMethod() {
	            return 1;
	        },
			slow(x) {
			    console.log("Called with " + x);
			    return x * this.someMethod(); // (*)
			}
	};

    function cachingDecorator2(func) {
        let cache = new Map();
	    return function(x) {
	        if (cache.has(x)) {
	            return cache.get(x);
			}
			let result = func.call(this, x); // "this" is passed
											// correctly now
			cache.set(x, result);
			return result;
		};
	}

	worker2.slow = cachingDecorator2(worker2.slow); // now make it

	console.log( worker2.slow(2) ); // works
	console.log( worker2.slow(2) ); // works, doesn't call the original
									// (cached)
	
	
}


function multiArgumentWithFuncApply() {
    
    console.log("[multiArgumentWithFuncApply]");
    console.log("Now let's make cachingDecorator even more universal. Till now it was working only with single-argument functions.");
    console.log("Here we can use another built-in method func.apply.");
    console.log("Syntax:  func.apply(context, args)");
    console.log("The only syntax difference between call and apply");
    console.log("is that call expects a list of arguments, while apply takes an array-like object with them.");
    
    let worker = {
            slow(min, max) {
                console.log(`Called with ${min},${max}`);
                return min + max;
            }
    };

    function cachingDecorator(func, hash) {
        let cache = new Map();
        return function() {
            let key = hash(arguments); // (*)
            if (cache.has(key)) {
                return cache.get(key);
            }

            let result = func.apply(this, arguments); // func.apply(context, [1, 2, 3])

            cache.set(key, result);
            return result;
        };
    }


    /*
     * To improve this function: return [].join.call(arguments)
     * The trick is called method borrowing.
     * We take (borrow) a join method from a regular array [].join. And use [].join.call 
     * to run it in the context of arguments.
     */
    function hash(args) {
        return args[0] + ',' + args[1];
//        console.log("improve");
//        return [].join.call(args);
    }

    worker.slow = cachingDecorator(worker.slow, hash);

    console.log( worker.slow(3, 5) ); // works
    console.log( "Again " + worker.slow(3, 5) ); // same (cached)
    
    
    
    
}



