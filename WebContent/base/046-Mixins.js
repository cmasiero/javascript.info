/**
 * 
 */
function mixins() {
    console.log("[mixins]");
    
    console.log("In JavaScript we can only inherit from a single object.");
    console.log("There can be only one [[Prototype]] for an object."); 
    console.log("And a class may extend only one other class.");

    console.log("But sometimes that feels limiting.");
    console.log("For instance, I have a class StreetSweeper and a class Bicycle, and want to make a StreetSweepingBicycle.");
    
   // mixin
    let sayHiMixin = {
      sayHi() {
        console.log(`Hello ${this.name}`);
      },
      sayBye() {
          console.log(`Bye ${this.name}`);
      }
    };

    // usage:
    class User {
      constructor(name) {
        this.name = name;
      }
    }

    // copy the methods
    Object.assign(User.prototype, sayHiMixin); // There's no inheritance, but a simple method copying. 

    // now User can say hi
    new User("Dude").sayHi(); // Hello Dude!
    
    
    console.log("* Mixins can make use of inheritance inside themselves.");
    
    let sayMixin2 = {
            say(phrase) {
              console.log(phrase);
            }
    };

    let sayHiMixin2 = {
            __proto__: sayMixin2, // (or we could use Object.create to set the prototype here)
            
            sayHi() {
              // call parent method
              super.say(`Hello ${this.name}`);
            },
            sayBye() {
              super.say(`Bye ${this.name}`);
            }
    };

    class User2 {
        constructor(name) {
            this.name = name;
        }
    }

    // copy the methods
    Object.assign(User.prototype, sayHiMixin);

    // now User can say hi
    new User("Dude2").sayHi(); // Hello Dude!
    
}