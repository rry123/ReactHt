const { Router } = require("express");
const router = Router();


const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");


router.post('/signup', (req, res)=>{
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
    const username = req.headers.username;
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
module.exports = router;