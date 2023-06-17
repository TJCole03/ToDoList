const express = require('express'); 
const morgan = require('morgan');
const toDoRoutes = require('./routes/toDoRoutes')
const app = express();

//app.use(express.status('public/css'));
app.use(express.json());
app.use(morgan('combined'));
app.use('/todos', toDoRoutes); //where home endpoint is established


module.exports = app;