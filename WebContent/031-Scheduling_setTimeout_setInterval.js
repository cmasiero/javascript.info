/**
 * 
 */
function schedulingSetTimeoutSetInterval(){
	console.log("***** schedulingSetTimeoutSetInterval *****");

	console.log("* The syntax: let timerId = setTimeout(func|code, delay[, arg1, arg2...])");
	
	function sayHi1() {
		console.log('Hello');
	}
	setTimeout(sayHi1, 1000);
	
	
	function sayHi2(phrase, who) {
		console.log( phrase + ', ' + who );
	}

	setTimeout(sayHi2, 1000, "Hello", "John"); // Hello, John
	
	console.log("If the first argument is a string, then JavaScript creates a function from it.");
	setTimeout("console.log('Hello')", 1000);
	
	console.log("But using strings is not recommended, use functions instead of them, like this:");
	setTimeout(() => console.log('Hello'), 1000);
	
	
	console.log("*** Canceling with clearTimeout");
	console.log("A call to setTimeout returns a 'timer identifier' timerId that we can use to cancel the execution.");
	let timerId = setTimeout(() => alert("never happens"), 1000);
	console.log("cancelling " + timerId); // timer identifier

	clearTimeout(timerId);
	console.log("cancelling " + timerId); // same identifier (doesn't become null after canceling)
	
	
	console.log("*** setInterval");
	
	console.log("syntax: let timerId = setInterval(func|code, delay[, arg1, arg2...])");
	// repeat with the interval of 2 seconds
	let timerId2 = setInterval(() => console.log('tick'), 2000);
	// after 5 seconds stop
	setTimeout(() => { clearInterval(timerId2); console.log('stop'); }, 5000);
	
	
	console.log("*** Recursive setTimeout"); 
	
	
	
}