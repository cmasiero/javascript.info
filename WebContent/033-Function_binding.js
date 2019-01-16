/**
 * 
 */
function losing_this(){
    console.log("[losing_this]");
    
    console.log("We already know that in JavaScript it's easy to lose this.");
    console.log("Once a method is passed somewhere separately from the object – this is lost.");
    
    let user1 = {
            firstName: "John",
            sayHi() {
              console.log(`Hello, ${this.firstName}!`);
            }
          };

    setTimeout(user1.sayHi, 1000); // Hello, undefined!
    
    console.log("* Solution 1: a wrapper");
    console.log("The simplest solution is to use a wrapping function:");
    
    let user2 = {
            firstName: "John",
            sayHi() {
              console.log(`Hello, ${this.firstName}!`);
            }
          };

    setTimeout(function() { 
          user2.sayHi(); // Hello, John!
    }, 1000);
    

    console.log("* Solution 2: bind");
    console.log("Functions provide a built-in method bind that allows to fix this.");
    console.log("basic syntax: let boundFunc = func.bind(context);");
    
    console.log("The result of func.bind(context) is a special function-like 'exotic object',");
    console.log("that is callable as function and transparently passes the call to func setting this=context.");
    
    let user3 = {
            firstName: "John"
                };

   function func() {
       console.log(this.firstName);
   }
   let funcUser = func.bind(user3);
   funcUser(); // John
    
   console.log("All arguments are passed to the original func 'as is', for instance:");
   
   let user4 = {
           firstName: "John"
               };

   function func4(phrase) {
       console.log(phrase + ', ' + this.firstName);
   }

   // bind this to user
   let funcUser4 = func4.bind(user4);
   funcUser4("Hello"); // Hello, John (argument "Hello" is passed, and this=user)
   
    
   console.log("Now let's try with an object method:");
   let user5 = {
           firstName: "John",
           sayHi() {
             console.log(`HelloObj, ${this.firstName}!`);
           }
         };

   let sayHi5 = user5.sayHi.bind(user5); // (*)
   sayHi5(); // Hello, John!
   setTimeout(sayHi5, 1000); // Hello, John!
   
   console.log("* Convenience method: bindAll");
   console.log("If an object has many methods and we plan to actively pass it around");
   /*
    * for (let key in user) {
    *     if (typeof user[key] == 'function') {
    *         user[key] = user[key].bind(user);
    *     }
    * }
    * 
    * JavaScript libraries also provide functions for convenient mass binding , e.g. _.bindAll(obj) in lodash.
    * 
    */
   
   
}