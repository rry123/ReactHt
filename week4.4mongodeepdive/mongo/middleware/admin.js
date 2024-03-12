
const {Admin} = require("../db");
//Middleware for handling auth
function adminMiddleware(req, res , next){
    //You need to check the headers and validate the admin from the admin database
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username : username, 
        password : password
    })
       .then(function(value){
             if(value){
                next();
             }
             else{
                res.status(403).json({
                    msg : "Admin does'nt exist"
                })
             }
       })
}

module.exports = adminMiddleware;