const mongoose = require('mongoose');
const quoteSchema = new mongoose.Schema({
        name: String,
        quote: String
    })
    //we compile here for the class of schema
    // const Quote = 
mongoose.model('Quote', quoteSchema); // it is a class