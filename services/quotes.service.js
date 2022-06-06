const mongoose = require('mongoose');
require('../models/quote.model') // create schema for Quote first 
const Quote = mongoose.model('Quote');
async function addQuote(body) {
    const quote = new Quote({
        name: body.name,
        quote: body.quote

    }); // it is object
    const result = await quote.save(); // it returns a promise
    // console.log('result inside service', result);
    return result;
}

function getQuotes() {
    // const quotes = await Quote.find();
    // console.log("QUO", quotes);
    return Quote.find();

}

function getQuote(id) {
    return Quote.findById(id)
}

function deleteQuote(id) {
    return Quote.findOneAndDelete({ _id: id })
}

function updateQuote(quote) {
    console.log("in update", quote)
    return Quote.findByIdAndUpdate(quote.id, {
        $set: {
            name: quote.name,
            quote: quote.quote
        }
    })
}
module.exports.addQuote = addQuote;
module.exports.getQuotes = getQuotes;
module.exports.getQuoteById = getQuote;
module.exports.deleteQuoteById = deleteQuote;
module.exports.updateQuote = updateQuote;