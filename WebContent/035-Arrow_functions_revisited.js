/**
 * 
 */

function arrowFunctionsRevisited() {
    
    console.log("[arrowFunctionsRevisited]");
    
    console.log("*Arrow functions have no 'this'");
    console.log("For instance, we can use it to iterate inside an object method:");
    let group1 = {
            title: "Our Group",
            students: ["John", "Pete", "Alice"],

            showList() {
              this.students.forEach(
                student => console.log(this.title + ': ' + student)
              );
            }
    };

    group1.showList();
    
    console.log("If we used a 'regular' function, there would be an error:");
    
    let group2 = {
            title: "Our Group *",
            students: ["John*", "Pete*", "Alice*"],

            showList() {
                this.students.forEach(function(student) {
                    //Error: Cannot read property 'title' of undefined
                    console.log(this.title + ': ' + student)
                });
            }
    };

    group2.showList();
    
    console.log("** Arrows have no 'arguments'");
    
    function defer(f, ms) {
        return function() {
          setTimeout(() => f.apply(this, arguments), ms)
        };
      }

   function sayHi(who, add) {
        console.log('Hello, ' + who + " " + add);
   }

   let sayHiDeferred = defer(sayHi, 2000);
   sayHiDeferred("John", "aggiunto"); // Hello, John after 2 seconds
    
   console.log("The same without an arrow function would look like:");
   
   function defer2(f, ms) {
       return function(...args) {
         let ctx = this;
         setTimeout(function() {
           return f.apply(ctx, args);
         }, ms);
       };
   }
    
    
}