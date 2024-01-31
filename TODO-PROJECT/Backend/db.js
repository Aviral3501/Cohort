const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://Demo01:Xjtm4Ef6VQ0bacZV@cluster0.9bqikjb.mongodb.net/TodoApp");
//connected to out database

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo  = mongoose.model("todos", todoSchema);
//we hav defined the schema and are connected to the database
module.exports={
    todo:todo
}