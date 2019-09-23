const express = require("express");
const app = express();
const mongoose = require("mongoose")
app.use(express.json())
app.use(express.static(__dirname + '/public/dist/public'));

//DATABASE
mongoose.connect("mongodb://localhost/cakes", {useNewUrlParser: true})
require("./server/configs/mongoose")

//ROUTES
require("./server/configs/routes")(app)

//PORT
app.listen(8000, function(){
console.log("listening on port 8000")});