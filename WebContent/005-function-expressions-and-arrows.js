/**
 * 
 */
function function_expressions_and_arrows() {
	
	console.log("****function_expressions_and_arrows*****");

	function sayHi() {
		alert("Hello");
	}

	console.log("****************************************");
	console.log(" show function : ");
	console.log(sayHi);
	alert(sayHi);
	console.log("Please note that the last line does not run the function, because there are no parentheses after sayHi.");
	console.log("****************************************");
	
	console.log("******  Callback functions  ************");
	function ask(question, yes, no) {
		if (confirm(question))
			yes()
		else
			no();
	}

	function showOk() {
		alert("You agreed.");
	}

	function showCancel() {
		alert("You canceled the execution.");
	}

	// usage: functions showOk, showCancel are passed as arguments to ask
	ask("Do you agree?", showOk, showCancel);
	
	console.log("****************************************");
	console.log("Function Declaration: a function, declared as a separate statement, in the main code flow.");
	console.log("A Function Declaration is usable in the whole script/code block.");
	console.log("Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created at the right side of the 'assignment expression' =:");
	console.log("A Function Expression is created when the execution reaches it and is usable from then on.");
	console.log("****************************************");
	
	console.log("********  Arrow functions  *************");
	console.log("let func = (arg1, arg2, ...argN) => expression");
	console.log("let sum = (a, b) => a + b;");
	let sum = (a, b) => a + b;
	console.log("sum(1, 2) " + sum(1, 2) );
	
	console.log("If we have only one argument, then parentheses can be omitted, making that even shorter:");
	console.log("let double = n => n * 2;");
	let double = n => n * 2;
	console.log("double(3) " + double(3));
	console.log("If there are no arguments, parentheses should be empty (but they should be present):");
	
	console.log("let sayHi = () => alert(\"Hello!\");");
	let sayHiArrow = () => alert("Hello!");
	sayHiArrow();
	
	console.log("****************************************");
	console.log("Arrow functions can be used in the same way as Function Expressions.");
	console.log("let age = prompt(\"What is your age?\", 18);");
	console.log("let welcome = (age < 18) ?");
	console.log("  () => alert('Hello') :");
	console.log("  () => alert(\"Greetings!\");");
	console.log("welcome(); // ok now");
	
	
	
}

