/**
 * 
 */
function objectsCloningMerging(){
	
	console.log("objectsCloningMerging");
	
	console.log("*** We need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them on the primitive level. ***");
	console.log("*** Like this: ***");
	let user = {
		name : "John",
		age : 30
	};

	let clone = {}; // the new empty object

	// let's copy all user properties into it
	for ( let key in user) {
		clone[key] = user[key];
	}

	// now clone is a fully independant clone
	clone.name = "Pete"; // changed the data in it

	console.log(user.name); // still John in the original object
	
	
	console.log("*** Also we can use the method Object.assign for that. ***");
	console.log("Syntax is: Object.assign(dest[, src1, src2, src3...])");
	
	let user2 = { name: "John" };

	let permissions1 = { canView: true };
	let permissions2 = { canEdit: true };

	// copies all properties from permissions1 and permissions2 into user
	Object.assign(user2, permissions1, permissions2);
	
	console.log("user2 " + user2.toSource()); // Only firefox
	
	console.log("*** We also can use Object.assign to replace the loop for simple cloning:");
	let user3 = {
		name : "John",
		age : 30
	};

	let clone3 = Object.assign({}, user3);
	console.log("clone3" + clone3.toSource());
	
	console.log("****************************************");
	console.log("*** Properties can be references to other objects:");
	let user4 = {
		name : "John",
		sizes : {
			height : 182,
			width : 50
		}
	};

	console.log("user4.sizes.height " + user4.sizes.height); // 182
	
	console.log("*** Now it's not enough to copy clone.sizes = user.sizes, because the user.sizes is an object, it will be copied by reference. ");
	console.log("*** To fix that, we should use 'deep cloning'");
	
//	There’s a standard algorithm for deep cloning that handles the case above and more complex cases, 
//	called the Structured cloning algorithm. 
//	In order not to reinvent the wheel, 
//	we can use a working implementation of it from the JavaScript library lodash, 
//	the method is called _.cloneDeep(obj).

	let cloneDeep = _.cloneDeep(user4);
	console.log("cloneDeep " + cloneDeep.toSource());
	
	
	
	
}