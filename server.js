require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
//const ToDo = require('./models/todo') //can't get server started with this on
const PORT = process.env.PORT || 3001


const app = require('./app')

app.use(express.json()) 

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})


app.listen(PORT, () => {
    console.log(`${PORT} is LIT`)
})
