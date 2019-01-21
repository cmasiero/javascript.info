/**
 * 
 * In modern JavaScript we can set a prototype using __proto__, 
 * as described in the previous article. But it wasn’t like that all the time.
 * JavaScript has had prototypal inheritance from the beginning. It was one of the core features of the language.
 * But in the old times, 
 * there was another (and the only) way to set it: to use a "prototype" property of the constructor function. 
 * And there are still many scripts that use it.
 * 
 */
function thePrototypeProperty() {
    console.log("[thePrototypeProperty]");
    
    console.log("When a new object is created with new F(), the object's [[Prototype]] is set to F.prototype.");
    console.log("Please note that F.prototype here means a regular property named 'prototype' on F.");
    
    let animal = {
            eats: true
          };

    function Rabbit(name) {
        this.name = name;
    }
    Rabbit.prototype = animal;

    let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
          
    console.log( rabbit.eats ); // true
    
}

function defaultFPrototypeConstructorProperty() {
    console.log("[defaultFPrototypeConstructorProperty]");
    
    console.log("Every function has the 'prototype' property even if we don't supply it.");
    console.log("The default 'prototype' is an object with the only property constructor that points back to the function itself.");
    
    /*
     * function Rabbit() {}
     * 
     * default prototype
     * Rabbit.prototype = { constructor: Rabbit };
     * 
     */
    
    function Rabbit() {}
    // by default:
    // Rabbit.prototype = { constructor: Rabbit }
    console.log( Rabbit.prototype.constructor == Rabbit ); // true
    
    console.log("Naturally, if we do nothing, the constructor property is available to all rabbits through [[Prototype]]:");
    // by default:
    // Rabbit.prototype = { constructor: Rabbit }
    let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
    console.log(rabbit.constructor == Rabbit); // true (from prototype)
    
    
    console.log("We can use constructor property to create a new object using the same constructor as the existing one.");
    
    function Rabbit1(name) {
        this.name = name;
        console.log(name);
      }

    let rabbit1 = new Rabbit1("White Rabbit");
    let rabbit2 = new rabbit1.constructor("Black Rabbit");
    
    console.log("rabbit1 -> " + JSON.stringify(rabbit1, null, 2));
    console.log("rabbit2 -> " + JSON.stringify(rabbit2, null, 2));
    
}

function notEnsureTheRightConstructorValue(){
    console.log("notEnsureTheRightConstructorValue");
    
    console.log("JavaScript itself does not ensure the right 'constructor' value.");
    console.log("if we replace the default prototype as a whole, then there will be no 'constructor' in it.");
    
    
    function Rabbit() {}
    Rabbit.prototype = {
      jumps: true
    };

    let rabbit = new Rabbit();
    console.log(rabbit.constructor === Rabbit); // false
    
    
    console.log("So, to keep the right 'constructor' we can choose to add/remove properties ");
    console.log("to the default 'prototype' instead of overwriting it as a whole:");
    
    function Rabbit2() {}
    // Not overwrite Rabbit.prototype totally
    // just add to it
    Rabbit2.prototype.jumps = true
    // the default Rabbit.prototype.constructor is preserved
    
    
    console.log("Or, alternatively, recreate the constructor property manually:");
    
    Rabbit.prototype = {
            jumps: true,
            constructor: Rabbit
    };
    // now constructor is also correct, because we added it
    
}
