const { Router } = require("express");
const router = Router();

const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const {JWT_SECRET} = require("../config");


router.post('/signup', (req, res)=>{
    console.log("hi there");
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    })
         res.json({
            msg : "User created Successfully"
         })
})

router.get('/courses', async (req, res)=>{

    // Implementing course purchase login
   
    const response = await Course.find({});
    res.json({
        courses : response
    })
})


router.post('/courses/:courseId', userMiddleware, async (req, res)=>{
    const courseId=  req.params.courseId;     // you can also do by giving the course id in the body
    const username = req.username;
    try{
        await User.updateOne({
            username : username
        }, {
            "$push" :{
                purchasedCourses : courseId
            }
        })
    } catch(e){
        console.log(e);
    }

    res.json("Purchase Complet!");
})


router.get('/purchasedCoursed', userMiddleware, async (req, res)=>{
      const user = await User.findOne({
         username : req.headers.username
      })

      const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
      })

      res.json({
        purchasedcourses : courses
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