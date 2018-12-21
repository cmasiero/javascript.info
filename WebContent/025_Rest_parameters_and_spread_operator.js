/**
 * 
 */
function rest_parameters_spread_operator(){
	console.log("*** rest_parameters_spread_operator() ***");

	console.log("* Rest parameters ...");
	function sumAll(...args) { // args is the name for the array
		  let sum = 0;

		  for (let arg of args) sum += arg;

		  return sum;
	}
	console.log( sumAll(1) ); // 1
	console.log( sumAll(1, 2) ); // 3
	console.log( sumAll(1, 2, 3) ); // 6
	
	
	console.log("* The 'arguments' variable");
	function showName() {
		console.log( arguments.length );
		console.log( arguments[0] );
		console.log( arguments[1] );
		  // it's iterable
		  // for(let arg of arguments) alert(arg);
	}
	// shows: 2, Julius, Caesar
	showName("Julius", "Caesar");

	// shows: 1, Ilya, undefined (no second argument)
	showName("Ilya");
	
	
	console.log("* Arrow functions do not have 'arguments'");
	function f() {
		let showArg = () => console.log(arguments[0]);
		showArg();
	}
	f(1); // 1
	
	console.log("** Spread operator");
	
	
	
}