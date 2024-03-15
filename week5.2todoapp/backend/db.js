const mongoose = require("mongoose");



/*
Todo{
    title : string;
    description : string;
    completed : boolean;
}
*/

// creating schema
mongoose.connect("mongodb+srv://rajy25122:alpha123@cluster0.xiagf2u.mongodb.net/Todo-App");
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}