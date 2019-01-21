/**
 * 
 */
function theOldVar() {
	console.log("***** theOldVar *****");
	console.log("From the first sight, var behaves similar to let. That is, declares a variable:");
	console.log("But here are the differences:");
	
	console.log("* 'var' has no block scope");
	if (true) {
		  var test = true; // use "var" instead of "let"
	}
	console.log(test); // true, the variable lives after if
	
	console.log("* 'var' are processed at the function start");
	function sayHi() {
		phrase = "Hello";
		console.log(phrase);
		var phrase;
	}
	sayHi();
}