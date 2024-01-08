const fs = require('fs');
const { resolve } = require('path');

// async function using the promises

function readFile(){
    return new Promise(function(resolve) {
        fs.readFile("a.txt","utf-8",function(err,data){
            if(err){
                console.log("An error occured while reading the file !");
            }else{
                resolve(data);
                console.log("---the file contents are read ---")
            }
        })

    });
}
//callback function
function onDone(data){
    console.log(data);
}

//calling the function
readFile().then(onDone);