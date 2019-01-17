/**
 * 
 */
function gettersAndSetters() {
    console.log("[gettersAndSetters]");
    
    let user = {
            name: "John",
            surname: "Smith",

            get fullName() {
              return `${this.name} ${this.surname}`;
            },
            set fullName(value) {
              [this.name, this.surname] = value.split(" ");
            }
    };

    // set fullName is executed with the given value.
    user.fullName = "Alice Cooper";

    console.log(user.name); // Alice
    console.log(user.surname); // Cooper
    
}

function accessorDescriptors() {
    console.log("[accessorDescriptors]");
    
    let user = {
            name: "John",
            surname: "Smith"
    };

   Object.defineProperty(user, 'fullName', {
            get() {
              return `${this.name} ${this.surname}`;
            },

            set(value) {
              [this.name, this.surname] = value.split(" ");
            }
   });

   console.log(user.fullName); // John Smith
   for(let key in user) console.log(key); // name, surname
   
}

function smarterGettersSetters() {
    console.log("[smarterGettersSetters]");
    
    console.log(" if we want to forbid too short names for user, ");
    console.log("we can store name in a special property _name. And filter assignments in the setter:");
    
    let user = {
            get name() {
                return this._name;
            },

            set name(value) {
                if (value.length < 4) {
                    console.log("Name is too short, need at least 4 characters");
                    return;
                }
                this._name = value;
            }
    };

    user.name = "Pete";
    console.log(user.name); // Pete
    user.name = ""; // Name is too short...
}


function usingForCompatibility(){
    console.log("[usingForCompatibility]");
    
    console.log("One of the great ideas behind getters and setters -"); 
    console.log("they allow to take control over a 'normal' data property and tweak it at any moment.");
    
    function User(name, birthday) {
        this.name = name;
        this.birthday = birthday;

        // age is calculated from the current date and birthday
        Object.defineProperty(this, "age", {
          get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
          }
        });
      }

      let john = new User("John", new Date(1992, 6, 1));

      console.log( john.birthday ); // birthday is available
      console.log( john.age );      // ...as well as the age
      
}
