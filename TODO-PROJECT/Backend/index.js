const express = require("express");
const jwt = require("jsonwebtoken");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json()); //middleware 
app.use(cors());//allows our frontend to communicate with backend at a  specific port , however here we can hit backend from anywhere

app.listen(port , ()=>{
    console.log(`Server is running on ${port}`);
})

app.get("/todos",async (req,res)=>{
     const todos =await todo.find();
     //as there is nod condition , everuthing in the db will be returned
     res.json({
        todos:todos
     })
});


app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    //making sure the data matches our schema
    if(!parsePayload.success){
        res.status(411).json({
            msg:"invalid inputs"
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
    todoId = req.body.id;
    try {
    await todo.findByIdAndUpdate(todoId ,{
        completed:true
    });
    if(!updateTodo){
        return res.status(404).json({
            error: 'Could not find Todo.'
        })
    }
    res.json({ msg:"Marked as completed"});
}catch(error){
    console.error(error);
    res.status(500).json({error:"Internal Server error"});
}
})   