/**
 * 
 */
function propertyFlags() {
    console.log("[propertyFlags]");
    
    console.log("Object properties, besides a value, have three special attributes (so-called 'flags'):");
    console.log(" * writable     - if true, can be changed, otherwise it's read-only.");
    console.log(" * enumerable   - if true, then listed in loops, otherwise not listed.");
    console.log(" * configurable - if true, the property can be deleted and these attributes can be modified, otherwise not.");
    console.log("When we create a property “the usual way”, all of them are true");
    
    console.log("");
    console.log("First, let's see how to get those flags.");
    
    console.log("Syntax: let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);");
    
    let user1 = {
            name: "John"
          };

    let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');
    console.log( JSON.stringify(descriptor1, null, 2 ) );
    /* property descriptor:
    {
       "value": "John",
       "writable": true,
       "enumerable": true,
       "configurable": true
    }
    */
   
    console.log("To change the flags, we can use Object.defineProperty.");
    console.log("The syntax: Object.defineProperty(obj, propertyName, descriptor)");
   
    let user2 = {};

    Object.defineProperty(user2, "name", {
        value: "John"
    });

    let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name');

    console.log( JSON.stringify(descriptor2, null, 2 ) );
    /*
    {
      "value": "John",
      "writable": false,
      "enumerable": false,
      "configurable": false
    }
    */
   
    console.log("Compare it with 'normally created' user.name above: now all flags are falsy. If that's not what we want then we’d better set them to true in descriptor.");
    
}

function propertyFlagsReadOnly(){
    console.log("[propertyFlagsReadOnly]");
    
    let user1 = {
        name: "John"
    };

    Object.defineProperty(user1, "name", {
        writable: false
    });

    user1.name = "Pete"; // Error: Cannot assign to read only property 'name'...
    
    
    console.log("Here's the same operation, but for the case when a property doesn't exist:");
    
    let user2 = { };

    Object.defineProperty(user2, "name", {
      value: "Pete",
      // for new properties need to explicitly list what's true
      enumerable: true,
      configurable: true
    });

    console.log(user2.name); // Pete
    user2.name = "Alice"; // Error
    
}

function propertyFlagsNonEnumerable() {
    console.log("[propertyFlagsNonEnumerable]");
    
    console.log("Now let's add a custom toString to user.");
    console.log("Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in. ");
    console.log("But if we add toString of our own, then by default it shows up in for..in, like this:");
    
    let user1 = {
            name: "John",
            toString() {
              return this.name;
            }
    };

    // By default, both our properties are listed:
    for (let key in user1) console.log(key); // name, toString
    
    
    console.log("If we don't like it, then we can set enumerable:false."); 
    console.log("Then it won't appear in for..in loop, just like the built-in one:");
    
    let user2 = {
            name: "John",
            toString() {
              return this.name;
            }
    };

    Object.defineProperty(user2, "toString", {
        enumerable: false
    });

    // Now our toString disappears:
    for (let key in user2) console.log(key); // name
         
    console.log("Non-enumerable properties are also excluded from Object.keys:");
    console.log(Object.keys(user2)); // name
    
}

function propertyFlagsNonConfigurable(){
    
    console.log("[propertyFlagsNonConfigurable]");
    
    console.log("Making a property non-configurable is a one-way road. ");
    console.log("We cannot change it back, because defineProperty doesn't work on non-configurable properties.");
    
    let user = { };

    Object.defineProperty(user, "name", {
      value: "John",
      writable: false,
      configurable: false
    });

    // won't be able to change user.name or its flags
    // all this won't work:
    //   user.name = "Pete"
    //   delete user.name
    //   defineProperty(user, "name", ...)
    Object.defineProperty(user, "name", {writable: true}); // Error

}

function objectDefineProperties() {
    console.log("[objectDefineProperties]");
    
    console.log("There's a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.");
    
    let user = { };
    Object.defineProperties(user, {
        name: { value: "John", writable: false },
        surname: { value: "Smith", writable: false },
        // ...
    });
    
    console.log("user.name: " + user.name);
    
}

function objectGetOwnPropertyDescriptors() {
    console.log("objectGetOwnPropertyDescriptors");
    
    console.log("To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).");
    console.log("Together with Object.defineProperties it can be used as a 'flags-aware' way of cloning an object:");
    console.log("let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));");
    
    console.log("");
    console.log("Normally when we clone an object, we use an assignment to copy properties, like this:");
    console.log("for (let key in user) {");
    console.log("    clone[key] = user[key]");
    console.log("}");

    console.log("");
    
    console.log("...But that does not copy flags. So if we want a “better” clone then Object.defineProperties is preferred.");
    console.log("Another difference is that for..in ignores symbolic properties, but Object.getOwnPropertyDescriptors returns all property descriptors including symbolic ones.console.log");
    
    
}

