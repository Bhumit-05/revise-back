const express = require("express");
const mongoose = require("mongoose");
const { TodoModel } = require("./db.js");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());


app.post("/todo", async function(req, res){
    const { title, duration } = req.body;
    
    try{
        await TodoModel.create({
            title : title,
            duration : Number(duration)
        })
        res.json({
            message : "Todo created!"
        })
    }
    catch(e){
        console.log(e);
        res.json({
            msg : "Todo not created!"
        })
    }
})

app.delete("/todo", async function(req, res){
    const todoId = req.body.todoId;
    try{
        await TodoModel.deleteOne({
            _id : todoId
        })
        res.json({
            message : "Todo deleted!"
        })
    }
    catch(e){
        res.json({
            message : "Todo not deleted!"
        })
    }
})

app.put("/todo", async function(req, res){
    const todoId = req.body.todoId;

    try{
        await TodoModel.updateOne({
            _id : todoId
        },
        {
            title : req.body.title,
            duration : req.body.duration
        })
        res.json({
            message : "Todo updated!"
        })
    }
    catch{
        res.json({
            message : "Todo not updated!"
        })
    }
})

app.get("/todo", async function(req, res){
    const todos = await TodoModel.find({});
    res.json(todos);    
})


async function main(){
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    app.listen(4000);
}

main();