/**
 * 
 */
function closure(){
	console.log("***** closure *****");

	console.log("*** Environments in detail");
	console.log("* Please note the additional [[Environment]] property that we didn't cover yet.");
	
	console.log("* example 1");
	function makeCounter() {
		let count = 0;
		return function (){
			return count++;
		};
	}
	
	let counter = makeCounter();
	console.log("-> " + counter());
	console.log("-> " + counter());
	
	
	console.log("* example 2");
	function makeWorker() {
		let name = 'Pete'; // But if there were no let name result is John.
		
		return function() {
			console.log(name);
		}
	}
	let name = 'John';
	let work = makeWorker();
	work();
	
	
	console.log("***** Code blocks and loops, IIFE *****");
	console.log("...");
	
	
	console.log("*** IIFE: 'immediately-invoked function expressions' ");
	(function() {
		let message = "IIFE: Hello";
		console.log(message); // Hello
	})();
	
}