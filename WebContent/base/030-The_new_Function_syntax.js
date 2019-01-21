/**
 * 
 */
function theNewFunctionSyntax(){
	
	console.log("***** TheNewFunctionSyntax *****");

	console.log("let func = new Function ([arg1[, arg2[, ...argN]],] functionBody)");
	let sayHi = new Function('alert("Hello2")');
	sayHi(); // Hello
	
	console.log("The major difference from other ways we've seen is that the function"); 
	console.log("is created literally from a string, that is passed at run time.");
	
	console.log("*** Closure");
	
	function getFunc() {
		let value = "test";
		let func = function() { console.log(value); };
		return func;
	}
	getFunc()(); // "test", from the Lexical Environment of getFunc
	
	
}