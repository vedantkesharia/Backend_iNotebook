const mongoose = require('mongoose');


require("dotenv").config();
const new_uri = process.env.MONGO_URI;

const connectToMongo = ()=>{
    mongoose.connect(new_uri,()=>{
        console.log("Connected to Mongo successfully");
    })
}

module.exports = connectToMongo;