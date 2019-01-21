/**
 * 
 */
function introductionCallbacks() {
    console.log("[introductionCallbacks]");
    
    console.log("Here's a runnable example with a real script:");
    
    function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => callback(script);
        document.head.append(script);
    }

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
        console.log(`Cool, the ${script.src} is loaded`);
        console.log( _ ); // function declared in the loaded script
    });
    
//    That's called a 'callback-based' style of asynchronous programming. 
//    A function that does something asynchronously should provide 
//    a callback argument where we put the function to run after it's complete.
//    Here we did it in loadScript, but of course, it's a general approach.
    
}

function callbackInCallback() {
    console.log("[callbackInCallback]");
    
    console.log("How to load two scripts sequentially: the first one, and then the second one after it?");
    
    loadScript('/my/script.js', function(script) {

        alert(`Cool, the ${script.src} is loaded, let's load one more`);

        loadScript('/my/script2.js', function(script) {
          alert(`Cool, the second script is loaded`);
        });

    });
    
    
    console.log("What if we want one more scrip...?");
    
    loadScript('/my/script.js', function(script) {

        loadScript('/my/script2.js', function(script) {

          loadScript('/my/script3.js', function(script) {
            // ...continue after all scripts are loaded
          });

        })

      });
}

function handlingErrors() {
    console.log("[handlingErrors]");
    
    
}

function pyramidOfDoom() {
    console.log("[pyramidOfDoom]");
    
    
}