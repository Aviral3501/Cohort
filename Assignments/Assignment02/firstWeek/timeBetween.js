//Assingment : Calculate the time between setTimeout() time and actual calling of the function{

function sum(a,b){
    let sum = a+b;
    console.log(sum);
}
function createDelay(){
    let a =10;
    let b= -4;
    let startTime = performance.now();// mark the start time
    console.log("start time =>"+startTime);
    setTimeout(()=> {
        let endTime = performance.now();
        console.log("end time is =>"+endTime)
        let elapsedTime = endTime - startTime;
        console.log("Elapsed Time is " +elapsedTime+" milliseconds");
        sum(a,b);
},4000);
}

createDelay();

//The performance.now() function in JavaScript returns a DOMHighResTimeStamp, a high-resolution timestamp.
//  It is used for performance testing purposes, giving developers a high-precision, high-resolution timer.