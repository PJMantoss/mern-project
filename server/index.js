const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://joel:hollywood@cluster0.kxgzl.mongodb.net/mernproject?retryWrites=true&w=majority");

app.listen(3001, () => {
    console.log("Server is runnning!")
});