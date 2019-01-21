/**
 * 
 */

function classCheckingInstanceof() {
    console.log("[classCheckingInstanceof]");
    
    console.log("The syntax is: obj instanceof Class");
    
    class Rabbit {}
    let rabbit = new Rabbit();

    // is it an object of Rabbit class?
    console.log( rabbit instanceof Rabbit ); // true
    
    
    console.log("* The algorithm of obj instanceof Class works roughly as follows:");
    console.log("todo");
    
}