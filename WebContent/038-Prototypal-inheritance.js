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

function readWriteRules(){
    console.log("[ReadWriteRules]");
    
    console.log("The prototype is only used for reading properties.");
    console.log("For data properties (not getters/setters) write/delete operations work directly with the object.");
    
    let animal = {
            eats: true,
            walk() {
              /* this method won't be used by rabbit */
                console.log("Animal! walk!");
            }
    };

    let rabbit = {
            __proto__: animal
    };

    rabbit.walk = function() {
        console.log("Rabbit! Bounce-bounce!");
    };

    rabbit.walk(); // Rabbit! Bounce-bounce!
    
    console.log("****************************************");
    
    let user = {
            name: "John",
            surname: "Smith",

            set fullName(value) {
              [this.name, this.surname] = value.split(" ");
            },

            get fullName() {
              return `${this.name} ${this.surname}`;
            }
   };

   let admin = {
           __proto__: user,
           isAdmin: true
   };

   console.log(admin.fullName); // John Smith (*)

   // setter triggers!
   admin.fullName = "Alice Cooper"; // (**)
   
   console.log("admin.fullName " + admin.fullName);
   console.log("user.fullName  " + user.fullName);
    
}

function theValueOfThis () {
    console.log("[theValueOfThis]");
    
    console.log("/*** No matter where the method is found: in an object or its prototype. ***/"); 
    console.log("/*** In a method call, this is always the object before the dot.         ***/");
    
    
    // animal has methods
    let animal = {
      walk() {
        if (!this.isSleeping) {
          console.log(`I walk`);
        }
      },
      sleep() {
        this.isSleeping = true;
      }
    };

    let rabbit = {
      name: "White Rabbit",
      __proto__: animal
    };

    // modifies rabbit.isSleeping
    rabbit.sleep();
    //animal.sleep();
    console.log(rabbit.isSleeping); // true
    console.log(animal.isSleeping); // undefined (no such property in the prototype)
    
}

