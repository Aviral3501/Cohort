const mongoose = require("mongoose");

//creating listSchema
const listSchema = new mongoose.Schema({
    title: {type:String , required:true},
    description:{type:String , required:true},
    user:[{
        type:mongoose.Types.ObjectId,
        ref:"User",
        }]
    //Add any other fileds you need 
});

module.exports = mongoose.model("List",listSchema);