const mongoose = require("mongoose");
//connect to the mongoose

const conn = async (req,res) => {
    try {
        await mongoose.connect("mongodb+srv://Demo01:Xjtm4Ef6VQ0bacZV@cluster0.9bqikjb.mongodb.net/ToDoWebApp");
        console.log("connected to the database");
    } catch (error){
        console.error("Error connecting to the database");
        res.status(400).json({msg:"failed to connect to the database"})
    }
}

conn(); //calling the connection function

