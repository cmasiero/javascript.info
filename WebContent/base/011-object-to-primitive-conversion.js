/**
 * 
 */
function object_to_primitive_conversion(){
	
	console.log("*** object_to_primitive_conversion() ***");
	console.log("*** ToPrimitive");
	console.log("It’s converted to a primitive value using the ToPrimitive algorithm ");
	console.log("*** There are three variants:");
	console.log("*** string");
	console.log("When an operation expects a string, for object-to-string conversions, like alert:");
	console.log("*** number");
	console.log("When an operation expects a number, for object-to-number conversions, like maths:");
	console.log("*** default");
	console.log("Occurs in rare cases when the operator is \"not sure\" what type to expect.");
	console.log("In practice, all built-in objects except for one case (Date object, we’ll learn it later) implement \"default\" conversion the same way as \"number\". And probably we should do the same.");
	
	console.log("*** To do the conversion, JavaScript tries to find and call three object methods: ***");
	
	console.log("* Call obj[Symbol.toPrimitive](hint) if the method exists,");
	
	console.log("* Otherwise if hint is \"string\" ");
	console.log(" (try obj.toString() and obj.valueOf(), whatever exists.)");
	
	console.log("* Otherwise if hint is \"number\" or \"default\" (try obj.valueOf() and obj.toString(), whatever exists.)");
	
	console.log("****************************************");
	console.log("*** Symbol.toPrimitive");
	
	let user = {
			name: "John",
			money: 1000,

			[Symbol.toPrimitive](hint) {
				console.log(`hint: ${hint}`);
			    return hint == "string" ? `{name: "${this.name}"}` : this.money;
			  }
			};

	// conversions demo:
	alert(user); // hint: string -> {name: "John"}
	//console.log(user); // hint: string -> {name: "John"} // Conversion hint string doesn't work using console.log...  
	console.log(+user); // hint: number -> 1000
	console.log(user + 500); // hint: default -> 1500
			
			
	console.log("Often we want a single \"catch-all\" place to handle all primitive conversions. In this case we can implement toString only, like this:");
	
	let user2 = {
			  name: "John",

			  toString() {
			    return this.name;
			  }
			};

	console.log(user2.toString()); // toString -> John
	console.log(user2 + 500); // toString -> John500
			
	
	console.log("****************************************");
	console.log("*** ToPrimitive and ToString/ToNumber ***");
	console.log("The important thing to know about all primitive-conversion methods is that they do not necessarily return the “hinted” primitive.");
	console.log("There is no control whether toString() returns exactly a string, or whether Symbol.toPrimitive method returns a number for a hint \"number\".");
	
	console.log("THE ONLY MANDATORY THING: THESE METHODS MUST RETURN A PRIMITIVE.");
	
	
	
}

    
