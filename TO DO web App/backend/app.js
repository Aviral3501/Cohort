const express = require("express");

const  app = express();
const port =3000;
require("./db");
const auth = require("./routes/auth")

app.use(express.json());
app.use("/api/v1", auth);

app.listen(port ,()=>{
    console.log(`Server is running on ${port}`);
})

app.get("/",(req,res)=>{
    res.send({message:"Hello World"});
})
 
