const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title : String,
    duration : Number,
})

const TodoModel = mongoose.model("todos", todoSchema);

module.exports = { TodoModel };