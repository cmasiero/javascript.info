/**
 * 
 */
function prototype() {
    console.log("[Prototype]");
    
    console.log("In JavaScript, objects have a special hidden property [[Prototype]]");
    console.log("The property [[Prototype]] is internal and hidden, but there are many ways to set it.");
    
    let animal = {
            eats: true
            };
          
    let rabbit = {
            jumps: true
            };

   rabbit.__proto__ = animal; // (*)
   // we can find both properties in rabbit now:
   console.log( rabbit.eats ); // true (**)
   console.log( rabbit.jumps ); // true
   
   console.log("****************************************");
   
   console.log("The prototype chain can be longer:");
   let animal1 = {
           eats: true,
           walk() {
             console.log("Animal walk");
           }
   };

   let rabbit1 = {
           jumps: true,
           __proto__: animal1
   };

   let longEar1 = {
           earLength: 10,
           __proto__: rabbit1
   };

   // walk is taken from the prototype chain
   longEar1.walk(); // Animal walk
   console.log(longEar1.jumps); // true (from rabbit)
   
}