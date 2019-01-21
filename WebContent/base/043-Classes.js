/**
 * 
 */
function theClassSyntax() {
    console.log("[theClassSyntax]");
    
    console.log("Here's a prototype-based class User:");
    
    function User(name) {
        this.name = name;
    }

    User.prototype.sayHi = function() {
        console.log(this.name);
    }

    let user = new User("John");
    user.sayHi();
      
    console.log("class syntax:");
   
    class User2 {

        constructor(name) {
          this.name = name;
        }

        sayHi() {
          console.log(this.name);
        }

    }

    let user2 = new User2("John");
    user2.sayHi();
   
      
    
}

function classExpression() {
    console.log("[classExpression]");
    
    console.log("Here's a class-returning function ('class factory'):");
    
    function makeClass(phrase) {
        // declare a class and return it
        return class {
          sayHi() {
            alert(phrase);
          };
        };
    }
      
    let User = makeClass("Hello");
    new User().sayHi(); // Hello
    
}

function staticMethods() {
    console.log("[staticMethods]");
    
    console.log("An example:");
    class User {
        static staticMethod() {
          console.log(this === User);
        }
    }
    User.staticMethod(); // true
    
    console.log("That actually does the same as assigning it as a function property:");
    
    function User2() { }

    User2.staticMethod = function() {
      console.log(this === User);
    };
    
    User2.staticMethod();
}