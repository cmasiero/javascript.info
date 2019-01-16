/**
 * 
 */
function bindWithArguments() {
    console.log("[bindWithArguments]");

    function mul(a, b) {
        return a * b;
    }

    console.log("Let's use bind to create a function double on its base:");
    
    let double = mul.bind(null, 2);

    console.log( double(3) ); // = mul(2, 3) = 6
    console.log( double(4) ); // = mul(2, 4) = 8
    console.log( double(5) ); // = mul(2, 5) = 10
    
    console.log("Here our benefit is that we created an independent function with a readable name (double, triple)");
    console.log("In other cases, partial application is useful when we have a very generic function");

}

function goingPartialWithoutContext() {
    console.log("[goingPartialWithoutContext]");
    
    console.log("What if we'd like to fix some arguments, but not bind this?");
    console.log("The native bind does not allow that.");
    console.log("Fortunately, a partial function for binding only arguments can be easily implemented.");
    
    function partial(func, ...argsBound) {
        return function(...args) { // (*)
          return func.call(this, ...argsBound, ...args);
        }
    }

    // Usage:
    let user = {
            firstName: "John",
            say(time, phrase) {
                console.log(`[${time}] ${this.firstName}: ${phrase}!`);
            }
    };

    // add a partial method that says something now by fixing the first argument
    user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

    user.sayNow("Hello");
    // Something like:
    // [10:00] John: Hello!
    
}

function currying() {
    console.log("[currying]");
    
    console.log("Sometimes people mix up partial function application mentioned above with another thing named 'currying'. ");
    console.log("Currying is translating a function from callable as f(a, b, c) into callable as f(a)(b)(c).");
    
    function curry(func) {
        return function(a) {
          return function(b) {
            return func(a, b);
          };
        };
    }

    // usage
    function sum(a, b) {
        return a + b;
    }

    let carriedSum = curry(sum);

    console.log( carriedSum(1)(2) ); // 3

    console.log("*** Currying for what?");
    
    function log(date, importance, message) {
        console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
    }
    log = _.curry(log);
    log(new Date(), "DEBUG", "some debug");
    
    console.log("But also can be called in the curried form:");
    log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)
    
    
    console.log("Let's get a convenience function for today's logs:");
    // todayLog will be the partial of log with fixed first argument
    let todayLog = log(new Date());
    // use it
    todayLog("INFO", "message"); // [HH:mm] INFO message
    
    console.log("And now a convenience function for today's debug messages:");
    let todayDebug = todayLog("DEBUG");
    todayDebug("message"); // [HH:mm] DEBUG message
    
    
    
}



