const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rajy25122:alpha123@cluster0.xiagf2u.mongodb.net/userappnew");

const User = mongoose.model('Users', {name : String, email : String , password : String});
const express = require("express");
const app = express();

app.use(express.json());
//const user = new User({name : 'Ritik Raj Yadav', email : 'ritikraj@gmail.com', password : '123456'});



// we can now use post request to do this as below 

app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name  = req.body.name;
    
    const existingUser = await User.findOne({email : username});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name : name, 
        email : username,
        password : password
    });
    user.save();
    res.json({
        msg: "User created Successfully"
    })
});

app.listen(3000);