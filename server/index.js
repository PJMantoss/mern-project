const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

mongoose.connect("mongodb+srv://joel:hollywood@cluster0.kxgzl.mongodb.net/mernproject?retryWrites=true&w=majority");

app.get("/getusers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

app.post("/createuser", (req, res) => {
    
})

app.listen(3001, () => {
    console.log("Server is runnning!")
});