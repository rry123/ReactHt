// what if the user sends wrong body

const express = require("express");
const app = express();


app.use(express.json());   // in order to access req.body

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    if(!kidneys){
        res.json({
            msg : "wrong inputs"
        })
        return;
    }
    res.send("Your kidney length is " + kidneyLength);
})


//global catches
// if any exception happens then the following middleware shows the exption 

app.use(function(err, req, res, next){
    res.json({
        msg : "Sorry something is up with our server"
    })
})
app.listen(3000);