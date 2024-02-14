const express = require("express");
const cors = require("cors");

const  app = express();
const port =3000;
require("./db");


const auth = require("./routes/auth")
const list = require("./routes/list")

app.use(express.json());
app.use(cors());
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(port ,()=>{
    console.log(`Server is running on ${port}`);
})

app.get("/",(req,res)=>{
    res.send({message:"Hello World"});
})
 
