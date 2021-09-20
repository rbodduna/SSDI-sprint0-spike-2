const express = require('express');
const app=express();
const port=3000;

const {MongoClient} = require("mongodb");
const path='mongodb://localhost:27017/';
const dbname="Sample";
app.get('/',async(req,res)=>{
    MongoClient.connect(path,{useNewUrlParser:true})
    .then((client)=>{
        const connect=client.db(dbname);
        const collection=connect.collection("People");
        collection.find({}).toArray().then((ans)=>{
            res.send(ans);
        });
    }).catch((err)=>{
        res.send(err.Message);
    })
});
app.listen(port,()=>{
    console.log("The server is running on port",port);
});