const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://joel:hollywood@cluster0.kxgzl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.listen(3001, () => {
    console.log("Server is runnning!")
});