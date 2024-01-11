// npm i express 
const express = require('express');
const app = express();
const port = 3000;

//server will work only when app.listen is mentianed and only then it will listen for incoming requests at different routes 
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});

app.get("/",(req,res)=>{
    res.send("Hello World!");
});
app.post('/post', (req, res) => {
    // Process the data here
    //res.send("<b>Post request recieved</b>");
    //or
    res.send({
        status: "success",
        message:"Post request received",
        Fname:"Aviral",
        Lname:"Singh",
    })
});