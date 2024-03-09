//zod library is used for input validation
const express = require("express");

const zod = require("zod");

const app = express();

const schema = zod.array(zod.number());
/*
{
    email : string=> email
    password : atleast 8 characters
    country  : "IN", "US"
}
*/

const schema1 = zod.object({
    email : zod.string(),
    country : zod.literal("IN").or(z.literal("US")),
    password : zod.string()
})


app.use(express.json());


app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg: "wrong inputs"
        })
    }
    else{
        res.send({
            response
        })
    }
});


// global catches
app.use(function(err, req, res, next){
    res.json({
        msg : "Sorry something is up with our servers"
    })
})

app.listen(3000);