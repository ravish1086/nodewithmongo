const express = require('express');
const app = express();
const dotenv = require('dotenv')

const connectDatabase = require('./database')

dotenv.config({path: './config.env'})

connectDatabase();

app.listen(process.env.POST,() =>
{
    console.log("Server started")
})