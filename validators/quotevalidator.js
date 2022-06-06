const Joi = require('joi');
const isQuoteValid = function quoteIsValid(req, res) {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        quote: Joi.string().min(10).required()
    })
    let validationObject = {
        errorMsg: '',
        isValid: false
    };
    const result = schema.validate(req.body, "ERROR");
    if (result.error) {
        // res.status(400).send();
        validationObject.errorMsg = result.error.details[0].message;
        isValid = false;
        return validationObject;

    } else {
        validationObject.errorMsg = null;
        validationObject.isValid = true;
        return validationObject;
    }
}
module.exports.isValid = isQuoteValid;