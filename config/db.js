const mongoose = require('mongoose');
// play ground is db if it is not there mongodb creates
const initDb = function connectToDatabase() {
    mongoose.connect('mongodb://localhost/quotes').then((result) => {
        console.log("MongoDB is connected here");
    }).catch((err) => {
        console.log("Connection failed", err)
    });
}
module.exports.initDb = initDb;