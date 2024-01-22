const express = require('express');
const app = express();
const port = 3000;

const zod = require('zod');
// const schema = zod.array(zod.number());

// suppose you want to have a  schema that supports
// {
//     location : "IN"or"US"
//     email : string ends with @gmail.com
//     password : at least 8 characters
// }

const schema = zod.object({
    email : zod.string().email,
    password : zod.string().min(8),
    country : zod.literal("IN").or(zod.literal("US")),
    kidneys : zod.array(zod.number())
})

app.use(express.json());//calls this middleware to any request that comes in any route
app.listen(port , ()=>{
    console.log(`App is listening on port number ${port}`);
})

app.post("/health-checkup",(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyLength = req.body.kidneyLength;
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