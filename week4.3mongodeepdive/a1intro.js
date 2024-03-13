// defining the schema
/*
const UserSchema = new mongoose.Schema({
    email : String, 
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course
    }]
})

const CourseSchema = new mongoose.Schema({
    titel : String,
    price : 5999
})

const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);    //two tables User and Course will be created by mongodb

create

User.create({
    username : req.body.username,
    password : req.body.password
})

Reading

User.fidnById("1");
User.findOne({
    username : "ritik@gmail.com"
})

User.find({
    username: "ritik@gmail.com"
})


updation
User.updateOne(
    {"id" : "1"},
    {$push : {purchasedCourse : courseId}}
)

User.updateOne({
    id : "1"
},
    {
        password : "newPassword"
    }
)

User.update({},{
    premium : true
})



Deletion
User.deleteMany({})

User.deleteOne({
    username : "harkirat@gmail.com"
})
*/