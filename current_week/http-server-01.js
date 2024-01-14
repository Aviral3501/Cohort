const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port =3000;

app.use(bodyParser.json());

app.listen(port ,()=>{
    console.log(`Server is running on ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Hello World - landing page ")
})
app.get("/home",(req,res)=>{
    res.send("Home page");
})
app.post('/post', (req, res) => {
    // Process the data here
    //res.send("<b>Post request recieved</b>");
    //or
    const message = req.body.message ;
    res.json({
        ouptut : "Zoro",
        sanji : "number 7 "
    })
});
