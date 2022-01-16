const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(3001, () => {
    console.log("Server is runnning!")
});