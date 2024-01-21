//here we will se how we use Middlewares for auth in input validation
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());//calls this middleware to any request that comes in any route
app.listen(port , ()=>{
    console.log(`App is listening on port number ${port}`);
})

app.post("/health-checkup" , (req,res)=>{
    //do somethign with kidneys here
    //kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = req.body.kidneyLength;
    res.send("Kidney Lnegth is "+ kidneyLength);
})


//use this middleware at end --> unlike express.json() which has to be written at he beginning
//middleware to make sure we display apt message and not our directory structure
//global catch
app.use(function(err,req,res,next){
    res.json({
        "msg":"Sorry , somehting is up with our server",
    })
})