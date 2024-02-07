const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");



//create  a new list for user
router.post("/addTask" , async (req,res)=>{
  try{
     //check if the user exists , if  not send a 401 unauthorized error and message : "User Not Found!"
    //only add the task if the user exists
    const {title, description, email} = req.body;
    const existingUser = await User.findOne({email});

    if(!existingUser){
        return res.status(400).json({message:"User not found"});

    }
        //create a new list
        const list = new List({title,description,user:existingUser});
        await list.save();
       
        //update the list 
        existingUser.list.push(list);
        await existingUser.save();

        //respond with new list 
        res.status(200).json(list);

  }catch(error){
    console.error("Error during adding task", error);
    res.status(500).json("msg:Internal server error");
  }
});

//update the list for the user 

router.put("/updateTask/:id" , async (req,res)=>{
    try{
    const {email, title, description} = req.body;
    //if user exists
    const existingUser = await User.findOne({email});
    if(existingUser){
        await List.findByIdAndUpdate(req.params.id,{title ,description});
       res.status(200).json({message:"Task has been updated"});
        console.log("task has been updated");
    }else{
        //respond with user not found
        res.status(400).json({message:'User not found'});
    }
    }catch(error){
        console.error("Error during updating task", error);
        res.status(500).json("msg:Internal server error");
    }
})

//delete task

router.delete("/deleteTask/:id" , async(req,res)=>{
    try {
        const {email}= req.body;
        //if user exists
        //it not only deltes a task but also updates the listArray in in User  model
        const existingUser = await User.findOneAndUpdate(
            {email},
            {$pull: {list : req.params.id}});
        if(existingUser){
            await List.findByIdAndDelete(req.params.id);
            return res.status(200).json({message : "The Task has been deleted"});
            } else {
                //respond with user not found
                return res.status(400).json('User Not Found');
        }
        
    } catch (error) {
        console.log("Error during deleting task");
        res.status(500).json({message:"Internal server error"});
    }
})

//read all the todos

router.get("/getTasks/:id" , async (req,res)=>{
    try {
        //find the list and print tasks in the "LIFO" format , newest task is printed first
        const list = await List.find({user:req.params.id}).sort({createdAt : -1});
        res.status(200).json(await list);
    } catch (error) {
        console.log("Error in getting the tasks");
        res.status(500).json({message:"Internal server error"});
    }
})
module.exports = router;