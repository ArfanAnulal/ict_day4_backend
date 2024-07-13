// importing express
var express = require('express');

// Initialization
var app = express();

// middleware

// api
// app.get('url',(req,res)=>{})
app.get("/",(req,res)=>{
    res.send("Hello World!!");
});

app.get("/login",(req,res)=>{
    res.send("Arfan V Anulal");
});


// port assigning
app.listen(3000,(req,res)=>{
    console.log('Port is up and running')
})