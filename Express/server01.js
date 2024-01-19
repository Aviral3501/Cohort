// creating an http server 
//using express

const express = require("express");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>")
})

//Calculate sum
//function provided by the website or a part of it 

function CalculateSum(n){
    let sum=0;
    for (let i=1;i<=n;i++){
        sum+=i;
        }
        return sum;
}

//Send back the result to the user

app.get("/sum",(req,res)=>{
    const n= req.query.n;
    const sum = CalculateSum(n);
    res.send(sum.toString());
})

//if you dont cenvert it to string it will be trated as a status code : error
//http://localhost:3000/sum?n=10

