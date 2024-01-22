//Zod is an input validation library 
//it does the input validation for us -->
//we just need to tell what are the inputs ansd their descriptions(kitna letters, digits ,email etc )
//it does the tedios work for us 

const express = require('express');
const app = express();
const port = 3000;

const zod = require('zod');
//defining the type and nature of the input or our schema 
//kidneys =[1,2] i.e. an array of  numbers , that is what is also defined in the shcema above
const schema = zod.array(zod.number());


app.use(express.json());//calls this middleware to any request that comes in any route
app.listen(port , ()=>{
    console.log(`App is listening on port number ${port}`);
})

app.post("/health-checkup",(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyLength = req.body.kidneyLength;
    //either i can do multiple checks for different input 
    // but here we will use zod library
    //here is the format
    const response = schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            "msg":"input is invalid"
        })
    }else{
        res.send({
            response
        })
    }
})