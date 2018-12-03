/**
 * 
 */
function array_methods() {
	
	console.log("*** array_methods() ***");
	
	console.log("*** splice");
	
	let arr = ["I", "study", "JavaScript"];
	arr.splice(1, 1); // from index 1 remove 1 element
	console.log( arr ); // ["I", "JavaScript"]
	
	
	let arr2 = ["I", "study", "JavaScript", "right", "now"];
	// remove 3 first elements and replace them with another
	arr2.splice(0, 3, "Let's", "dance");
	console.log( arr2 ) // now ["Let's", "dance", "right", "now"]
	
	let arr3 = ["I", "study", "JavaScript", "right", "now"];
	// remove 2 first elements
	let removed3 = arr3.splice(0, 2);
	console.log( removed3 ); // "I", "study" <-- array of removed elements
	
	
	console.log("* The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:");
	
	let arr4 = ["I", "study", "JavaScript"];
	// from index 2
	// delete 0
	// then insert "complex" and "language"
	arr4.splice(2, 0, "complex", "language");
	console.log( arr4 ); // "I", "study", "complex", "language", "JavaScript"
	
	console.log("* Negative indexes allowed");
	
	let arr5 = [1, 2, 5];
	// from index -1 (one step from the end)
	// delete 0 elements,
	// then insert 3 and 4
	arr5.splice(-1, 0, 3, 4);
	console.log( arr5 ); // 1,2,3,4,5
	
	
	console.log("*** slice");
	console.log("* The method arr.slice is much simpler than similar-looking arr.splice.");
	let str6 = "test";
	let arr6 = ["t", "e", "s", "t"];
	console.log( str6.slice(1, 3) ); // es
	console.log( arr6.slice(1, 3) ); // e,s
	console.log( str6.slice(-2) ); // st
	console.log( arr6.slice(-2) ); // s,t
	
	
	console.log("*** concat");
	console.log("* arr.concat(arg1, arg2...)");
	console.log("* If an argument is an array or has Symbol.isConcatSpreadable property, then all its elements are copied. Otherwise, the argument itself is copied.");
	console.log("* Normally, it only copies elements from arrays (\"spreads\" them). Other objects, even if they look like arrays, added as a whole:");
	let arr7 = [1, 2];
	let arrayLike7 = {
	  0: "something",
	  length: 1
	};
	console.log( arr7.concat(arrayLike7) ); // 1,2,[object Object]
	//[1, 2, arrayLike]
	console.log("* ...But if an array-like object has Symbol.isConcatSpreadable property, then its elements are added instead:");
	let arr8 = [1, 2];
	let arrayLike8 = {
	  0: "something",
	  1: "else",
	  [Symbol.isConcatSpreadable]: true,
	  length: 2
	};
	console.log( arr8.concat(arrayLike8) ); // 1,2,something,else
	
	console.log("*** Searching in array ***");
	console.log("* arr.indexOf(item, from) looks for item starting from index from, and returns the index where it was found, otherwise -1.");
	console.log("* arr.lastIndexOf(item, from) - same, but looks from right to left.");
	console.log("* arr.includes(item, from) - looks for item starting from index from, returns true if found.");
	
	
	console.log("*** find and findIndex");
	
	console.log("let result = arr.find(function(item, index, array) {");
	console.log("	  // should return true if the item is what we are looking for");
	console.log("});");
	let users = [
		  {id: 1, name: "John"},
		  {id: 2, name: "Pete"},
		  {id: 3, name: "Mary"}
	];
	let user = users.find(item => item.id == 1);
	console.log(user.name); // John
	
	console.log("* filter");
	console.log("let results = arr.filter(function(item, index, array) {");
	console.log("  // should return true if the item passes the filter");
	console.log("});");
	
	let users1 = [
		  {id: 1, name: "John"},
		  {id: 2, name: "Pete"},
		  {id: 3, name: "Mary"}
	];
	// returns array of the first two users
	let someUsers1 = users1.filter(item => item.id < 3);
	console.log(someUsers1.length); // 2
	
	console.log("*** Transform an array");
	console.log("* map");
	let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
	console.log(lengths); // 5,7,6
	
	console.log("*** sort(fn)");
	let arr9 = [ 1, 2, 15 ];
	// the method reorders the content of arr (and returns it)
	arr9.sort();
	console.log( arr9 + " The items are sorted as strings by default.");  // 1, 15, 2
	
	console.log("* sort number");
	function compareNumeric(a, b) {
		if (a > b) return 1;
		if (a == b) return 0;
		if (a < b) return -1;
	}
	arr9.sort(compareNumeric);
	console.log( arr9 + " Sort numeric!");
	
	console.log("* Arrow functions for the best");
	console.log("arr.sort( (a, b) => a - b );");
	
	console.log("* reverse");
	let arr10 = [1, 2, 3, 4, 5];
	arr10.reverse();
	console.log( "reverse " +  arr10 ); // 5,4,3,2,1
	
	
	console.log("* split and join");
	console.log("We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary.");
	console.log("But for us an array of names would be much more comfortable than a single string.");
	console.log("The str.split(delim) method does exactly that");
	let names = 'Bilbo, Gandalf, Nazgul';
	let arr = names.split(', ');
	for (let name of arr) {
	  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
	}
	
	
}