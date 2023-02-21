const mongoose = require('mongoose');


//require("dotenv").config();
//const new_uri = process.env.MONGO_URI;
mongo_uri = "mongodb+srv://Vedant:tnadev1111@cluster0.ohbypjl.mongodb.net/inotebook?retryWrites=true&w=majority";
const connectToMongo = ()=>{
    mongoose.connect(mongo_uri,()=>{
        console.log("Connected to Mongo successfully");
    })
}

module.exports = connectToMongo;