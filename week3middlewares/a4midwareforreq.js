// creating a middlewares whose sole purpose is to calculate
// the number of  requests that are hitting the server


const express = require("express");

const app = express();
let numberOfRequests = 0;
function calRequests(req, res, next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}


app.use(calRequests);    // means that in every route this middleware will be used
// app.get("health-checkup", function(req, res))  then also by default calrequest middleware will be used here

//app.use(express.json());

// app.get("/health-checkup", calRequests, function(req, res){

// })


app.use(express.json());   // allows to use the body

app.post("/health-checkup", function(req, res){
     res.json({
        msg : "hi there"
     })
})
app.listen(3000);