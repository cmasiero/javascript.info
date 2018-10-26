/**
 * 
 */

function function004() {

	console.log("************ Returning a value *******");
	console.log("A function with an empty return or without it returns undefined");
	console.log("****************************************");
	function checkAge(age) {
		if (age > 18) {
			return true;
		} else {
			return confirm('Got a permission from the parents?');
		}
	}

	let age = prompt('How old are you?', 18);

	if (checkAge(age)) {
		alert('Access granted');
	} else {
		alert('Access denied');
	}

}