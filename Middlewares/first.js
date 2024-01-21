const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.listen(port , ()=>{
    console.log(`App is listening on port number ${port}`);
})

// here we are considering only one user 
app.get("/",(req,res)=>{
    //do health checks here 
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    //Authentication of user 
    if(username!="harirat" && password!="pass"){
        res.status(403).json({
            msg:"user does not exist,"
        });
        return;
    }

    //input validation
    if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }

    //if there is no return it means --> correct user and correct input 
    //do something baout your kidneys here

    res.send("Your kidney is healthy");
})

//http://localhost:3000/?kidneyId=1
//http://localhost:3000/?kidneyId=3

//now lets say we have to create another route --> we have to do the same auth and input checks multiple times
//DO NOT REPEAT YOURSELF (DRY)
// hence for that we use middlewares 

//eg
app.get("/user",(req,res)=>{
    //do health checks here 
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    //Authentication of user 
    if(username!="harirat" && password!="pass"){
        res.status(403).json({
            msg:"user does not exist,"
        });
        return;
    }

    //input validation
    if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }
    //do somthing
    res.send("Your Information is as follows ");
})

// to avoid repeating we use Middlewares 
