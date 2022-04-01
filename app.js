//jshint esversion:6
require('dotenv').config();
const express = require("express");
const ejs = require("ejs");
const app = express();
const mongoose = require('mongoose');
const md5 = require('md5');


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/userDB');
//  await mongoose.connect('mongodb+srv://'+user+':'+pw+'@'+cluster+'.mongodb.net/wikiDB');
};

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});




const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/register", function(req, res) {
    res.render("register");
});

app.post("/register", function(req, res) {
    const newUser = new User ({
        email: req.body.username,
        password: md5(req.body.password)
    });
    newUser.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.render("secrets");
        }
    });
});

app.post("/login", function(req, res) {
    const username = req.body.username;
    const password = md5(req.body.password);

    User.findOne({email: username}, function(err, foundUser) {
        if (err) {
            console.log(err);
        } else if (foundUser) {
            if (foundUser.password === password) {
                res.render("secrets");
            } else {
                // incorrect password                
                res.render("home");
            }
        }  else {
            // did not find username
            res.render("home");
        }
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(3000, function() {
    console.log("Server has started successfully");
  });