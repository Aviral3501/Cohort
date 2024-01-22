const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());//middleware
app.listen(port , (req,res)=>{
    console.log(`App is listening on port number ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Landing page")
})
