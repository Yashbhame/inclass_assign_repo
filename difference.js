let time = Date.now();

function calculateDiff(){
    console.log("running?")
    console.log("The time difference is " + (Date.now() - time))

}

setTimeout(calculateDiff, 1000);






//Calculate the time it takes between a setTimeout call and the inner function actually running.

`let time = Date.now(); // Record the current time, for an inner function that is actually running
// 'time' This timestamp is used as a reference point for calculating the time difference later, note that the 'time' is now static and recorded in 'time' be Date.now() at that point 
// And when the function is called, the difference is logged, which is the time elapsed since the initial timestamp stored in the time variable.

function runLater() {
    console.log("runLater");
    console.log("The time difference is: ", Date.now() - time);          // This calculates the time difference 
}

 setTimeout (runLater, 3 * 1000);              //setTimeout call which calls the inner function runLater
// runLater();`