/**
 * 
 */
function schedulingSetTimeoutSetInterval(){
	console.log("***** schedulingSetTimeoutSetInterval *****");

	console.log("* The syntax: let timerId = setTimeout(func|code, delay[, arg1, arg2...])");
	
	function sayHi1() {
		console.log('Hello');
	}
	setTimeout(sayHi1, 1000);
	
	
	function sayHi2(phrase, who) {
		console.log( phrase + ', ' + who );
	}

	setTimeout(sayHi2, 1000, "Hello", "John"); // Hello, John
	
	console.log("If the first argument is a string, then JavaScript creates a function from it.");
	setTimeout("console.log('Hello')", 1000);
	
	console.log("But using strings is not recommended, use functions instead of them, like this:");
	setTimeout(() => console.log('Hello'), 1000);
	
	
	console.log("*** Canceling with clearTimeout");
	console.log("A call to setTimeout returns a 'timer identifier' timerId that we can use to cancel the execution.");
	let timerId = setTimeout(() => alert("never happens"), 1000);
	console.log("cancelling " + timerId); // timer identifier

	clearTimeout(timerId);
	console.log("cancelling " + timerId); // same identifier (doesn't become null after canceling)
	
	
	console.log("*** setInterval");
	
	console.log("syntax: let timerId = setInterval(func|code, delay[, arg1, arg2...])");
	// repeat with the interval of 2 seconds
	let timerId2 = setInterval(() => console.log('tick'), 2000);
	// after 5 seconds stop
	setTimeout(() => { clearInterval(timerId2); console.log('stop'); }, 5000);
	
}

function schedulingRecursiveSetTimeout() {
	
	console.log("[schedulingRecursiveSetTimeout]");
	console.log("*** Recursive setTimeout");
	
	console.log("* There are two ways of running something regularly.");
	console.log("* One is setInterval");
	
	/** instead of:
	let timerId = setInterval(() => alert('tick'), 2000);
	*/
	console.log("* Other is setTimeout");
	let timerId = setTimeout(function tick() {
	  console.log('[tick] (setTimeout)');
	  timerId = setTimeout(tick, 2000); // (*)
	}, 2000);
	
//	The recursive setTimeout is a more flexible method than setInterval. 
//	This way the next call may be scheduled differently, 
//	depending on the results of the current one.
	
//	Garbage collection
//	When a function is passed in setInterval/setTimeout, an internal reference is created to it and saved in the scheduler. 
//	It prevents the function from being garbage collected, even if there are no other references to it.
//
//	// the function stays in memory until the scheduler calls it
//	setTimeout(function() {...}, 100);
//	For setInterval the function stays in memory until clearInterval is called.
//
//	There's a side-effect. A function references the outer lexical environment, so, while it lives, outer variables live too. 
//	They may take much more memory than the function itself. 
//	So when we don't need the scheduled function anymore, it's better to cancel it, even if it's very small.
	
	
}

function schedulingSetTimeout0(){
	
	console.log("[schedulingSetTimeout0]");
	console.log("*** There's a special use case: setTimeout(func, 0).");
	console.log("This schedules the execution of func as soon as possible. But scheduler will invoke it only after the current code is complete.");
	
	setTimeout(() => console.log("World"), 0);
	console.log("Hello");
	
}

function schedulingSplittingCPUHungryTasks() {
	console.log("[schedulingSplittingCPUHungryTasks]");
	
	let i = 0;
	let start = Date.now();
	function count() {
		console.log("[count] " + i);
		
		// move the scheduling at the beginning
		if (i < 1e9 - 1e6) {
			console.log("setTimeout");
			setTimeout(count, 0); // schedule the new call
		}

	    do {
	      i++;
	    } while (i % 1e6 != 0);

	    if (i == 1e9) {
	      alert("Done in " + (Date.now() - start) + 'ms');
	    }

	}

	count();
	
}

function minimalDelayOfNestedTimersInBrowser(){
	console.log("[minimalDelayOfNestedTimersInBrowser]");
	
	console.log("In the browser, there's a limitation of how often nested timers can run.");
	console.log("The HTML5 standard says: 'after five nested timers, the interval is forced to be at least four milliseconds.'");
	
	let start = Date.now();
	let times = [];

	setTimeout(function run() {
	  times.push(Date.now() - start); // remember delay from the previous call

	  if (start + 100 < Date.now()) 
		  console.log(times); // show the delays after 100ms
	  else 
		  setTimeout(run, 0); // else re-schedule
	}, 0);

	// an example of the output:
	// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100
	
	 
	
	
}

function minimalDelayOfNestedTimersInBrowser() {
	
	console.log("[minimalDelayOfNestedTimersInBrowser]");
	
	console.log("Another benefit for in-browser scripts is that they can show a progress bar or something to the user."); 
	console.log("That's because the browser usually does all 'repainting' after the script is complete.");
	console.log("So if we do a single huge function then even if it changes something, the changes are not reflected in the document till it finishes.");
	
	console.log("Un approccio per parti evita il problema del repainting");
//	<div id="progress"></div>
//
//	<script>
//	  let i = 0;
//
//	  function count() {
//
//	    // do a piece of the heavy job (*)
//	    do {
//	      i++;
//	      progress.innerHTML = i;
//	    } while (i % 1e3 != 0);
//
//	    if (i < 1e9) {
//	      setTimeout(count, 0);
//	    }
//
//	  }
//
//	  count();
//	</script>
	
	
}