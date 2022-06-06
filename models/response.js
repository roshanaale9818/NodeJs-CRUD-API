function getResponse(res, dataObject) {
    res.status(dataObject.code).send({
        status: dataObject.status,
        message: dataObject.message,
        data: dataObject.data
    })
}
module.exports = getResponse;