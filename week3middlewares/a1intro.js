 const express = require("express");

 const app = express();

// app.get("/health-checkup", function(req, res){
//     res.send("Your heart is healthy");
// })

// app.listen(3000);

//ugly way without using middlewares

app.get("/health-checkup", function(req, res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;


    if(username === "ritik" && password === "pass"){
        if(kidneyId ==1 || kidneyId == 2){
            res.json({
                msg : "Your kidney is fine!"
            })
        }
    }

    
    res.status(400).json({
        "msg" : "Somethings up with your inputs"
    })
})

app.listen(3000);