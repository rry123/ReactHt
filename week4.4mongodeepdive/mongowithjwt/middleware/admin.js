//Middleware for handling authentication
const jwt = require("jsonwebtoken");

const {JWT_SECRET} = require("../config");
function adminMiddlware(req, res, next){
    // admin will send a token will look like this Bearer kfdjajdalkfjkdjs
    const token = req.headers.authorization;
    
    //get back token

    const words = token.split(" ");

    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if(decodedValue.username){
        next();
    }
    else{
        res.status(403).json({
            msg : "You are not authenticated"
        })
    }
}


module.exports = adminMiddlware;