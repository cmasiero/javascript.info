/**
 * 
 */
function methodsForPrototypes() {
    console.log("[methodsForPrototypes]");
    
    
    console.log("There are also other ways to get/set a prototype, besides those that we already know:");
    
    let animal = {
            eats: true
          };

    // create a new object with animal as a prototype
    let rabbit = Object.create(animal);

    console.log(rabbit.eats); // true
    console.log(Object.getPrototypeOf(rabbit) === animal); // get the prototype of rabbit

    Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
    console.log("Object.create has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:");
    rabbit = Object.create(animal, {
        jumps: {
          value: true
        }
   });

   console.log(rabbit.jumps); // true
    
   console.log("We can use Object.create to perform an object cloning more powerful than copying properties in for..in:");
   let clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));

   console.log("clone " + clone.jumps);
   
}