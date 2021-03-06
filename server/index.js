const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");

//Parse JSON in post request
app.use(express.json());
app.use(cors());

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

app.post("/createuser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

app.listen(3001, () => {
    console.log("Server is runnning!")
});