const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserSchema = require("/models/Users");

mongoose.connect("mongodb+srv://joel:hollywood@cluster0.kxgzl.mongodb.net/mernproject?retryWrites=true&w=majority");

app.get("/getusers/", (req, res) => {
    UserSchema.find({}, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

app.listen(3001, () => {
    console.log("Server is runnning!")
});