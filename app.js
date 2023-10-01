const express = require("express");
const bodyParser = require("body-Parser");
const html = require("html");
const ejs = require("ejs");

const app = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({encoded : true}));
app.use(express.static("public"));

app.get("/home",function(req,res){
    res.render("index.ejs");
});

app.get("/feedback",function(req,res){
    res.render("user.ejs");
});

app.listen(3000,function(){
    console.log("Server started.")
  });

