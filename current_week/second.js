const fs = require('fs');
const { resolve } = require('path');

// async function using the promises

function readFile(){
    return new Promise(function(resolve) {
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })

    });
}
//callback function
function onDone(data){
    console.log(data);
    console.log("----->file has been read ");
    
}

//calling the function
readFile().then(onDone);
