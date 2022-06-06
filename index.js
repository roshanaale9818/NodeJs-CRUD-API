const express = require('express');
// const Joi = require('joi');
const quoteRoutes = require('./routes/quote');
const dbConfig = require('./config/db');
const app = express(); // this is our app
app.use(express.json()); // this is a middleware we should pass for the json manipulation


// init the database 
dbConfig.initDb();


// for all quote controller or routes
app.use('/api/quotes', quoteRoutes);
// port configuration for the api to listen on port 
const port = process.env.PORT ? process.env.PORT : 2000;
app.listen(port, () => {
    console.log("APP is running in PORT NO => " + port)
})