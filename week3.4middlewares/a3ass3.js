// Maintain the errorcount variable whose value should go up whenever an endpoint hits an exception

const express = require("express");

const app = express();

let errorcount = 0;


app.get('/user', function(req, res){
    throw new Error("User not found");
    res.status(200).json({
        name : 'john'
    })
});


app.post('/user', function(req, res){
    res.status(200).json({
        msg : "created dummy user"
    })
})

app.get('/errorCount', function(req, res){
    res.status(200).json({
         errorcount
    })
})

//error middleware
// takes four arguments

 app.use(function(err, req, res, next){
    res.send(400).send({});
    errorcount = errorcount+1;
 })

app.listen(3000);