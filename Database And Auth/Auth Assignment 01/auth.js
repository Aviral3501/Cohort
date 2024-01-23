const express = require('express');
const jwt = require("jsonwebtoken");
const jwtPassword = 123456;
const app = express();
const port =3000;

app.use(express.json());//middleware
app.listen(port , (req,res)=>{
    console.log(`App is listening on port number ${port}`);
})

const All_Users = [
    {
    username : "aviralsingh3501@gmail.com",
    password:"123",
    name:"aviral singh"
    },{
        username: "admin@test.com",
        password: "admin",
        name:"admin"
    },{
        username: "user@test.com",
        password: "user",
        name:"User"
    },
];


function userExists(userame , password){
    //write logic to return true or false if this user exists
    //in All_Users array
    let userExists =false;

    for(let i=0;i<All_Users.length;i++){
        if(All_Users[i].username == userame && All_Users[i].password == password){
            userExists = true;;
        }
    }
    return userExists;

}


app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User does not exists in our memory db"
        })
    }

    var token = jwt.sign({username:username},"shhhhh");
    return res.json({
        token,
    })
});

app.get('/users',(req, res) => {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        //return a list of users other than this username 
    }catch(err){
        return res.status(403).json({
            msg:"Invalid Token",
        })
    } 
});

