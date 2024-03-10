//You have to create a middleware for logging the number of request on a server

const express = require("express");
const app = express();

let requestCount =0;


// creating a middleware which will be used everytime
// global middleware

app.use(function(req, res, next){
    requestCount = requestCount +1;
})

app.get("/user", function(req, res){
    res.status(200).json({
        name : "John"
    })
})


app.post("/user", function(req, res){
    res.json("Created a dummy user successfully");
})

app.get("/reqcount", function(req, res){
    res.json({
        requestCount
    })
})


app.listen(3000);