const router = require("express").Router();
const User = require("../models/user");
// encrpting the password for scurity reasons -  using bcrypt for that
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




//sign up functionality
router.post("/register" , async(req,res) =>{
    try{
        //object destructuring
        const {email , username , password} = req.body;
        //hashing the password
        const hashpassword = bcrypt.hashSync(password ,10);
        const user  = new User({email,username,password:hashpassword});
        await  user.save();
        res.status(200).json({message:"User signed up succcesfully"});
       
    }catch(error){
        res.status(200).json({message:"User Already Exists"});
    }
})


// sign in / log in 

router.post("/signin" , async(req,res)=>{
    try{
        //check if user already exists or not
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(200).json({message:"Please Sign Up first "});
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password , user.password);
         if(!isPasswordCorrect){
           return  res.status(200).json({message:"Invalid email or password"});
         } 
        //except password , resturn  json data of user to the client side 
         const {password , ...userData} = user._doc; 
         return res.status(200).json( {userData});
        
    }catch(error){
        console.error("Error during signin:",error);
        return res.status(200).json({message:"Error during signin"})
    }
})

module.exports = router; 