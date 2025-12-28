// environment
require('dotenv').config()

// express
const express = require('express');
const app = express();

// path 
const path = require('path');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// static files setup
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routes
const routes = require('./routes');
app.use("/", (req, res)=> res.send("Hello world!"))

// port
const PORT = process.env.PORT || '3000';

// listen
app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Running server on: http://localhost:${PORT}`);
});