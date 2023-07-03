const API_URL = 3500;
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/mongoDBconn');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
connectDB();

app.use('/', require(path.join(__dirname, "/routes/register.js")));
app.get("/", (req,res) => res.json({message: "SetUp Success Yay!!"}));
// 404 route - for handling undefined routes
app.use((req, res) => {
    res.status(404).json('Page not found');
  });
  

mongoose.connection.once('open', () => {
    console.log("Connected to DB");
    app.listen(API_URL, () => {
        console.log(`Server started listening at Port ==> ${API_URL}`);
    })
})