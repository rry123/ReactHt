const express = require("express");

const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");

const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
//const JWT_SECRET = require("../index");
const router = express.Router();


router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists

    await Admin.create({
        username : username,
        password : password
    })

    res.json({
        message : "Admin created Successfully"
    })
})


router.post('/courses', adminMiddleware, async (req, res)=>{
    // Implementing course creation 
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        msg : "Course created successfully", courseId : newCourse._id
    })
})


router.get('/courses', adminMiddleware,  (req, res)=>{
    // Implementing fetching all courses details
      Course.find({})   //no condition
      .then(function(response){
        res.json({
            courses : response
        })
      })
})

router.post('/signin', async (req, res)=>{
    // user will send username and password and you have to return a jwt
    const username = req.body.username;
    const password = req.body.username;

    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
    
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            msg : "Invalid email or password"
        })
    }
})


module.exports = router;