//create a terminal clock
function getCurrentDateAndTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    //conversion in 12 hour format

    if(hours>12){
        hours-=12;
    }
    

    return `${hours}:${minutes}:${seconds}`;
}

//function to display the clock

function displayClock(){
    //get the current date and time
    let currentDateAndTime = getCurrentDateAndTime();
    console.clear(); // clear the console
    console.log(`The Current Time is ${currentDateAndTime}`);
    setTimeout(displayClock,1000) //update the clock every second
}

//start the clock
displayClock();