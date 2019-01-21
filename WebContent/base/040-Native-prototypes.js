/**
 * 
 */
function objectPrototype(){
    console.log("[objectPrototype]");
    
    console.log("The short notation obj = {} is the same as obj = new Object(),"); 
    console.log("where Object - is a built-in object constructor function.");
    console.log("And that function has Object.prototype that references a huge object with toString and other functions.");
    
    console.log("Afterwards when obj.toString() is called - the method is taken from Object.prototype.");
    console.log("We can check it like this:");
    
    let obj = {};
    console.log(obj.__proto__ === Object.prototype); // true
    //obj.toString === obj.__proto__.toString == Object.prototype.toString
    
}

function otherBuiltInPrototypes(){
    console.log("[otherBuiltInPrototypes]");
    
    console.log("TODO...");
}


function changingNativePrototypes () {
    console.log("[changingNativePrototypes]");
    
    console.log("Native prototypes can be modified. For instance, ");
    console.log("if we add a method to String.prototype, it becomes available to all strings:");
    
    String.prototype.show = function() {
        alert(this);
      };

    "BOOM!".show(); // BOOM!
    
    console.log("It is generally a bad idea.");
    console.log("Prototypes are global, so it’s easy to get a conflict. If two libraries add a method String.prototype.show, then ");
    
    
}


function borrowingFromPrototypes(){
    console.log("[borrowingFromPrototypes]");
    
    console.log("Because join resides in Array.prototype, we can call it from there directly and rewrite it as:");
    
    function showArgs() {
        console.log( Array.prototype.join.call(arguments, " - ") );
    }
    
    showArgs('arg1','arg2');
    
}
