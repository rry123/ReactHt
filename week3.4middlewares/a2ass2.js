//You have been given an express server which has few endpoints
//Your task is to create a global middleware which will rate limit the number of request per second
// if the number of requests per second by user is greater than 5 then the server should block then with a 404

// user will be sending in their userid in the header as user-id
// You have been given a numberofRequerstsForUser object to start off with which 
// clears every one second


const express = require("express");

const app = express();



let numberofRequestsForUser = {};

setInterval(function(){
    numberofRequestsForUser =0;
})


app.use(function(req, res, next){    // global middleware
     const userId = req.headers["user-id"];
     if(numberofRequestsForUser[userId]){
        numberofRequestsForUser[userId] = numberofRequestsForUser[userId] + 1;
        if(numberofRequestsForUser[userId]>5){
            res.status(404).send("You are blocked");
        }
        else{
            next();
        }
     }
     else{
        numberofRequestsForUser[userId] = 1;   // initializing if not exists
     }
})

