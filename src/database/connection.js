require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    console.log(process.env.CONNECT_STRING);
    var db = await mongoose.connect("mongodb://localhost:27017/residency"); 
    return db;
};

module.exports = connectDB;
