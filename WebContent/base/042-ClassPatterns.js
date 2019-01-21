/**
 * 
 */
function functionalClassPattern(){
    console.log("functionalClassPattern");
    
    function User(name) {
        this.sayHi = function() {
          console.log(name);
        };
      }

    let user = new User("John");
    user.sayHi(); // John
    
}

function factoryClassPattern() {
    console.log("[factoryClassPattern]");
    
    console.log("We can create a class without using new at all.");
    
    function User(name, birthday) {
        // only visible from other methods inside User
        function calcAge() {
          return new Date().getFullYear() - birthday.getFullYear();
        }

        return {
          sayHi() {
            console.log(`${name}, age:${calcAge()}`);
          }
        };
      }

    let user = User("John", new Date(2000, 0, 1));
    user.sayHi(); // John, age:17
    
}

function prototypeBasedClasses() {
    console.log("[prototypeBasedClasses]");
    
    console.log("Prototype-based classes are the most important and generally the best."); 
    console.log("Functional and factory class patterns are rarely used in practice.");
    
    function User(name, birthday) {
        this._name = name;
        this._birthday = birthday;
      }

    User.prototype._calcAge = function() {
        return new Date().getFullYear() - this._birthday.getFullYear();
    };

    User.prototype.sayHi = function() {
        console.log(`${this._name}, age:${this._calcAge()}`);
    };

    let user = new User("John", new Date(2000, 0, 1));
    user.sayHi(); // John, age:17
    
//    Here are the advantages over the functional pattern:
//        In the functional pattern, each object has its own copy of every method. We assign a separate copy of this.sayHi = function() {...} and other methods in the constructor.
//        In the prototypal pattern, all methods are in User.prototype that is shared between all user objects. An object itself only stores the data.
//
//    So the prototypal pattern is more memory-efficient.
//    ...But not only that. Prototypes allow us to setup the inheritance in a really efficient way. 
    
    
}