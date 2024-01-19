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

app.get("/" , (req,res)=>{
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

app.use(express.json()); //to req.body was undefined , hence to counter it we use thus line
app.post("/",(req,res)=>{
    //put the data into the body , below is how we acces the data in the body
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
            healthy : isHealthy
        })
    res.json({
        msg : "Done"
    })
}

);
app.put("/",(req,res)=>{
    for( let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
        //reset everything to true
    }
    res.json({
        msg:"All kidney's are now Healthy!"
    })
});
app.delete("/",(req,res)=>{
        users[0].kidneys.pop();
        res.json({
            msg : "Deleted a Kidney"
        })
});