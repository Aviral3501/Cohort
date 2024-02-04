const mongoose = require("mongoose");

//creatign user schema
const userSchema = new mongoose.Schema({
    username : { type:String ,required:true , unique:true},
    password : { type:String , required:true },
    email : {type:String , required:true , unique:true},
    list:[{
        type:mongoose.Types.ObjectId,
        ref:"List",
        }]
    //Add any other user fields you need
});

module.exports = mongoose.model("User" , userSchema);