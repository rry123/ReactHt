const express = require("express");

const app = express();

app.use(express.json());

function isOldEnoughMiddleware(req, res, next){
    const age = req.body.age;
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg: "Sorry you are not of age yet"
        })
    }
}




app.get("/ride1", isOldEnoughMiddleware, function(req, res){      // express function is just a series of middleware function calls 
    res.send("You rode the first ride!");  
});


app.get("/ride2", function(req, res){
    res.send("You rode the second ride!");
});

app.get("/ride3", function(req, res){
    res.send("You rode the third ride!");
});

app.listen(3000);