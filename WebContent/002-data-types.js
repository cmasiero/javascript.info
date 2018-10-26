/**
 * 
 */

function data_types() {
	console.log("****************************************");
	console.log("Infinity represents the mathematical Infinity. It is a special value that's greater than any number [1/0]  : " + 1/0);
	console.log("****************************************");
	alert( "not a number" / 2 );
	console.log("NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, [/ 2] ");
	console.log("****************************************");
	let str = "Hello";
	let str2 = 'Single quotes are ok too';
	let phrase = `can embed ${str}`;
	console.log("Backticks are 'extended functionality' quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}");
	console.log("let str = \"Hello\";");
	console.log("let phrase = `can embed ${str}`;");
	console.log(phrase);
	console.log("****************************************");
	console.log("There is no character type. There’s only one type: string");
	console.log("****************************************");
	console.log("The special value undefined stands apart. It makes a type of its own, just like null");
	let x;
	console.log("let x;");
	console.log("x: " + x);
	console.log("****************************************");
	console.log("The object type is special");
	console.log("All other types are called \"primitive\"");
	console.log("The symbol type is used to create unique identifiers for objects");
	console.log("****************************************");
	console.log("The typeof operator returns the type of the argument");
	console.log("As an operator: typeof x");
	console.log("Function style: typeof(x).");
	console.log("typeof undefined " + typeof undefined);
	console.log("typeof 0 " + typeof 0);
	console.log("typeof true " + typeof true);
	console.log("typeof \"foo\" " + typeof "foo");
	console.log("typeof Symbol(\"id\") " + typeof Symbol("id"));
	console.log("typeof Math " + typeof Math);
	console.log("typeof null " + typeof null + "(That’s wrong. It is an officially recognized error in typeof)");
	console.log("typeof alert " + typeof alert);
	console.log("****************************************");
	
}