const express = require("express");
const jwt = require("jsonwebtoken");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./bd");
const app = express();
const port = 3000;

app.use(express.json()); //middleware 

app.listen(port , ()=>{
    console.log(`Server is running on ${port}`);
})

app.get("/todos",async (req,res)=>{
     const todos =await todo.find();
     //as there is nod condition , everuthing in the db will be returned
     res.json({
        todos
     })
});


app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    //making sure the data matches our schema
    if(!parsePayload.success){
        res.status(411).json({
            msg:"invalid inputs , only string is accepted"
        })
        return;
    }

    //put in mongoDB
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
})


app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    //making sure it matches our schema
    if (!parsePayload.success) {
        res.status(411).json({
            error: "Invalid ID or completion status."
        });
        return;
    }
    //update the database with new information
    await todo.update({
        _id:updatePayload.id
    },{
        completed:true
    })

    res.json({
        msg:"marked as completed"
    })
})  