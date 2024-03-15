const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());



/*
body{
    title : string;
    description : string;
}
*/
app.post("/todo", async function(req, res){
      const createPayload = req.body;
      const parsePayload = createTodo.safeParse(createPayload);
      if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return
      }
      // put it in mongo db
      await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
      })

      res.json({
        msg : "Todo created"
      })
})


app.get("/todos", async function(req, res){
     const todos = await todo.find({});

     res.json({
        todos
     })
})

app.put("/completed", async function(req, res){
      const updatedPayload = req.body;
      const parsePayload = updateTodo.safeParse(updatedPayload);
      if(!parsePayload.success){
        res.status(411).json({
            msg : "You have sent the wrong id",
        })
        return;
      }
      await todo.updateOne({
        _id : req.body.id
      }, {
        completed : true
      })

      res.json({
        msg : "Todo marked as completed"
      })
})


app.listen(3000);