const express = require("express");
const app = express();
const port = 3000;
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const ALL_USERS = [
    {
        username:"aviral3501@gmail.com",
        password:"123",
        name: "Aviral"
    },
    {
        username:"raman",
        password:"man",
        name: "Raman"
    }
]

app.use(express.json());
app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})

function userExists(username , password){
    let userExists =false;
    for(let i=0; i<ALL_USERS.length ; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}



app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User doest not exists in our memory db"
        })
    }
    var token = jwt.sign({username:username}, jwtPassword);
    return res.json({
        token,
    });
});
app.get("/users",(req,res)=>{
    const token = req.headers.authorization;
    const decoded =jwt.verify(token,jwtPassword);
    const username = decoded.username;
    //return list of all users except current one
    res.json({
        users:ALL_USERS.filter(function(value){
            if(value.username == username){
                return false;
            }else{
                return true;
            }
        })
    })
});