const express = require('express');
const quoteValidator = require('../validators/quotevalidator');
const sendResponse = require('../models/response')
const router = express.Router();
const quoteService = require('../services/quotes.service');
// for getting all quotes
router.get('/', (req, res) => {
    getQuotes(res);
})


// for adding a quote
router.post('/', (req, res) => {
    const validationObject = quoteValidator.isValid(req, res);
    console.log("IS VALID STATUS", validationObject.isValid);
    if (!validationObject.isValid) {
        sendResponse(res, {
            status: false,
            code: 400,
            data: [],
            message: validationObject.errorMsg,
        })
    } else {
        console.log("body in request", req.body)
        const addedQuote = quoteService.addQuote(req.body);
        sendResponse(res, {
                status: true,
                code: 200,
                data: [],
                message: "Quote saved successfully."
            })
            // res.send("OKAY POSTING-after validation")
    }
    // console.log("Posting called here");

})

// for updating a quote 
// for adding a quote
router.post('/update', (req, res) => {
    updateQuote(res, req.body)
})

// getall quote by id 
router.get('/:id', (req, res) => {
    getQuote(res, req.params.id)
})
router.delete('/:id', (req, res) => {
    deleteQuote(res, req.params.id)
})

async function getQuotes(res) {
    const quotes = await quoteService.getQuotes();
    if (!quotes) {
        sendResponse(res, {
            status: false,
            code: 400,
            data: [],
            message: "No any quotes found.",
        })
    } else {
        sendResponse(res, {
            status: true,
            code: 200,
            data: quotes,
            message: "Found quotes in database",
        })
    }
}
async function getQuote(res, id) {
    const quote = await quoteService.getQuoteById(id);
    if (!quote) {
        sendResponse(res, {
            status: false,
            code: 200,
            data: [],
            message: "No any quote found",
        })
    } else {
        sendResponse(res, {
            status: true,
            code: 200,
            data: quote,
            message: "Quote found in database."
        })
    }
}
async function deleteQuote(res, id) {
    const quote = await quoteService.deleteQuoteById(id);
    if (!quote) {
        sendResponse(res, {
            status: false,
            code: 200,
            data: [],
            message: "No any quote found",
        })
    } else {
        sendResponse(res, {
            status: true,
            code: 200,
            data: quote,
            message: "Quote is deleted successfully"
        })
    }

}
async function updateQuote(res, _quote) {
    const quote = await quoteService.updateQuote(_quote).catch((err) => {
        sendResponse(res, {
            status: false,
            code: 200,
            data: [],
            message: "No any quote found",
        })
    });
    if (!quote) {
        sendResponse(res, {
            status: false,
            code: 200,
            data: [],
            message: "No any quote found",
        })
    } else {
        sendResponse(res, {
            status: true,
            code: 200,
            data: quote,
            message: "Quote is updated successfully"
        })
    }
}
module.exports = router;