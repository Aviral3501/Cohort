// to create an http swerver using express --> first create a js file  , then in the same folder run "npm init -y" to create a json file
//now to create the http server write this code -->
//run npm install express "as it does not locally exists (unlike fs.readFile())"

const express = require("express");
const app = express();
let port =3000;

//app.listen() creates a web server that listens for the incoming requests
app.listen(port, ()=>{
    console.log(`app is listening on the port ${port}`);
});       

//what would we respond with when we have a get request at a route 
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/home',(req,res)=>{
    res.send('this is the home page');
});