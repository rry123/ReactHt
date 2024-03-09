const express = require("express");

const app = express();

function userMiddleware(req, res, next){
    if(username!= ritik && password != "pass"){
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    }
    else{
        next();
    }
};

function kidneyMiddleware(req , res , next){
    if(kidneyId !=1 && kidneyId != 2){
        res.status(403).json({
            msg: "Incorrect Inputs",
        })
    }
    else{
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("Your heart is healthy");
});





