const express = require("express")

const app = express();
const fs = require("fs");
app.get("/files/:filename", function(req, res){
     const name = req.params.filename;
     console.log(name);

     fs.readFile(name, "utf-8", function(err, data){
        res.json({
            data
        });
     })
     res.json({});
});

app.listen(3000);