/**
 * 
 */
function destructuring_assignmentA(){
	
	console.log("*** destructuring_assignment ***");
	
	console.log("Destructuring assignment is a special syntax that allows us to 'unpack' arrays or objects into a bunch of variables,");
	console.log("as sometimes they are more convenient.");
	console.log("Destructuring also works great with complex functions that have a lot of parameters,");
	console.log("default values, and soon we’ll see how these are handled too.");

	console.log("** Array destructuring");
	// we have an array with the name and surname
	let arr = ["Ilya", "Kantor"]
	// destructuring assignment
	let [firstName, surname] = arr;
	console.log(firstName); // Ilya
	console.log(surname);  // Kantor
	
	console.log("* Now we can work with variables instead of array members.");
	
	let [firstName2, surname2] = "Ilya Kantor".split(' ');
	
	console.log("* Ignore first elements");
	// first and second elements are not needed
	let [, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
	console.log( title ); // Consul
	
	
	console.log("* we can use it with any iterable, not only arrays:");
	let [a, b, c] = "abc"; // ["a", "b", "c"]
	let [one, two, three] = new Set([1, 2, 3]);
	
	console.log("* Assign to anything at the left-side");
	let user = {};
	[user.name, user.surname] = "Ilya Kantor".split(' ');
	console.log(user.name); // Ilya
	
	console.log("* Looping with .entries()");
	let user1 = {
			  name: "John",
			  age: 30
			};

	// loop over keys-and-values
	for (let [key, value] of Object.entries(user1)) {
		console.log(`${key}:${value}`); // name:John, then age:30
	}
	
	console.log("the same for a map:");
	
	let user2 = new Map();
	user2.set("name", "John");
	user2.set("age", "30");

	for (let [key, value] of user2.entries()) {
	  console.log(`${key}:${value}`); // name:John, then age:30
	}
	
	
	console.log("* The rest ...");
	let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

	console.log(name1); // Julius
	console.log(name2); // Caesar

	console.log(rest[0]); // Consul
	console.log(rest[1]); // of the Roman Republic
	console.log(rest.length); // 2
	
	
	console.log("* Default values");
	
	// default values
	let [name10 = "Guest", surname10 = "Anonymous"] = ["Julius"];
	console.log(name10);    // Julius (from array)
	console.log(surname10); // Anonymous (default used)
	
	console.log("Default values can be more complex expressions or even function calls."); 
	console.log("They are evaluated only if the value is not provided.");
	
	// runs only prompt for surname
	let [name11 = prompt('name?'), surname11 = prompt('surname?')] = ["Julius"];

	console.log(name11);    // Julius (from array)
	console.log(surname11); // whatever prompt gets
	
	console.log("** Object destructuring");
	
	let options12 = {
			  title12: "Menu",
			  width12: 100,
			  height12: 200
			};

	let {title12, width12, height12} = options12;

	console.log(title12);  // Menu
	console.log(width12);  // 100
	console.log(height12); // 200

	console.log("This works too:");
	let {height13, width13, title13} = { title13: "Menu", height13: 200, width13: 100 }
	console.log(height13);
	console.log(width13);
	console.log(title13);
	
	console.log("If we want to assign a property to a variable with another name, for instance,");
	console.log("options.width to go into the variable named w, then we can set it using a colon:");
	
	let options14 = {
			  title14: "Menu",
			  width14: 100,
			  height14: 200
			};

	// { sourceProperty: targetVariable }
	let {width14: w, height14: h, title14} = options14;

	// width -> w
	// height -> h
	// title -> title
	console.log(title14);  // Menu
	console.log(w);      // 100
	console.log(h);      // 200
	
	console.log("For potentially missing properties we can set default values using \"=\", like this:");
	let options15 = {
			  title15: "Menu"
			};

	let {width15 = 100, height15 = 200, title15} = options15;

	console.log(title15);  // Menu
	console.log(width15);  // 100
	console.log(height15); // 200
	
	
	console.log("Default values can be any expressions or even function calls");
	
	let options16 = {
			  title16: "Menu"
			};
	let {width16 = prompt("width?"), title16 = prompt("title?")} = options16;
	console.log(title16);  // Menu
	console.log(width16);  // (whatever you the result of prompt is)
	
	
	console.log("We also can combine both the colon and equality:");
	let options18 = {
			  title18: "Menu"
			};

	let {width18: w18 = 100, height18: h18 = 200, title18} = options18;

	console.log(title18);  // Menu
	console.log(w18);      // 100
	console.log(h18);      // 200
	
}

function destructuring_assignmentB(){
	
	console.log("*** destructuring_assignmentB ***");
	console.log("* The rest operator");
	console.log("What if the object has more properties than we have variables? Can we take some and then assign the 'rest' somewhere?");
	
	let options19 = {
			  title19: "Menu",
			  height19: 200,
			  width19: 100
			};

	let {titleA, ...restB} = options19;
	

	// now title19="Menu", rest={height19: 200, width19: 100}
	console.log(restB.height19);  // 200
	console.log(restB.width19);   // 100
	
	
	console.log("* Gotcha without let !!!");
	console.log("To show JavaScript that it's not a code block, we can wrap the whole assignment in brackets (...):");
	let titleX = 'NoMenu', widthX, heightX;
	// okay now
	({titleX, widthX, heightX} = {titleX: "Menu", widthX: 200, heightX: 100});
	console.log( "->" +  titleX ); // Menu
	
	
	console.log("* Nested destructuring");
	console.log("If an object or an array contain other objects and arrays,"); 
	console.log("we can use more complex left-side patterns to extract deeper portions.");
	let optionsC = {
			sizeC: {
				widthC: 100,
			    heightC: 200
			    },
			itemsC: ["Cake", "Donut"],
			extraC: true    // something extra that we will not destruct
			};

			// destructuring assignment on multiple lines for clarity
    let {
    	sizeC: { // put size here
    		widthC,
			heightC
			},
			itemsC: [item1C, item2C], // assign items here
			        titleC = "Menu" // not present in the object (default value is used)
			} = optionsC;

    console.log(titleC);  // Menu
	console.log(widthC);  // 100
	console.log(heightC); // 200
	console.log(item1C);  // Cake
	console.log(item2C);  // Donut
	
	
	console.log("* Smart function parameters");
	console.log("There are times when a function may have many parameters, most of which are optional.");
	console.log("Here's a bad way to write such function:");
	function showMenuUgly(title = "Untitled", width = 200, height = 100, items = []) {
		  // ...
	}
	showMenuUgly("My Menu", undefined, undefined, ["Item1", "Item2"])
	console.log("In real-life, the problem is how to remember the order of arguments.");
	console.log("That's ugly:");
	console.log("We can pass parameters as an object, and the function immediately destructurizes them into variables:");
	// we pass object to function
	let options = {
	  title: "My menu",
	  items: ["Item1", "Item2"]
	};

	// ...and it immediately expands it to variables
	function showMenuOK({title = "Untitled", width = 200, height = 100, items = []}) {
	  // title, items - taken from options,
	  // width, height - defaults used
	  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
	  console.log( items ); // Item1, Item2
	}

	showMenuOK(options);
	
	
	
}

