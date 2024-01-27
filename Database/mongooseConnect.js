const express = require('express');
const app = express();
const port =3000;
const mongoose = require("mongoose");
//url to connect to the database server
mongoose.connect("mongodb+srv://Demo01:Xjtm4Ef6VQ0bacZV@cluster0.9bqikjb.mongodb.net/user_app");


app.use(express.json());
app.listen(port,()=>{
    console.log(`Appp is running on the port ${port}`);
})

//describing the structure of the database
const User= mongoose.model('Users',{name : String , email: String ,password:String });


//when the user signup , save the data in the databse and log a message to confirm it 
app.post("/signup",async function(req,res){
    const Fname  = req.body.Fname ; 
    const username = req.body.username ;
    const password =req.body.password;

    //check if the user already exists
    const existingUser= await User.findOne({email: username});
    if (existingUser) {
        return res.status(400).send('Username Already Exists')
      }

    const user = new User({ 
        name:Fname,
        email:username , 
        password:password,
    });
 
    user.save().then(()=>{
        console.log("data saved in the db");
    });

    //returna message
    res.json({
        msg:"User created succsfully"
    })
})

