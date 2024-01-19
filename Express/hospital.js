const express = require("express");
const app = express();
const port = 3000;


//task
/*You need to create 4 routes (4 things that the hospital can do) 
1. GET - User can check how many kidneys they have and their health 
2. POST - User can add a new kidney 
3. PUT - User can replace a kidney, make it healthy 
4. DELETE - User can remove a kidney
 */

//first we create our database (in memory)

var users = [{
    Fname : 'John',
    kidneys:[{healthy:true},{healthy:false}]}
    ,{
    Fname : 'Aviral',
    kidneys:[{healthy:true},{healthy:true}]
    }];  

//our database is ready --->

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})

app.get("/noOfKidneys" , (req,res)=>{
    let johnKidneys = users[0].kidneys;
    let numOfKidneys = johnKidneys.length;
    let numOfHealthyKidneys = 0; 
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy == true){
            numOfHealthyKidneys++;
        }
    }
    let numUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
    res.json({
        numOfKidneys : numOfKidneys,
        numOfHealthyKidneys: numOfHealthyKidneys,
        numUnhealthyKidneys:numUnhealthyKidneys
    })
});


app.post("addKidney",(req,res)=>{
}

);
app.put("/replaceKidney",(req,res)=>{

});
app.delete("/removeKidney",(req,res)=>{

});