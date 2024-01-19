const express = require('express');

//fucntion  provided by the server 
function CalculateSum(n){
    let sum=0;
    for (let i=1;i<=n;i++){
        sum+=i;
        }
        return sum;
}

const app = express();
const port = 3000;


app.listen(port ,()=>{
    console.log(`App is listening on port ${port}`);
} );


app.get("/",(req,res)=>{
    const n = req.query.n;//query Parameter 
    const ans = CalculateSum(n);
    res.send(ans.toString());
})

//http://localhost:3000/?n=10
//this will give the sum of 1 to 10 