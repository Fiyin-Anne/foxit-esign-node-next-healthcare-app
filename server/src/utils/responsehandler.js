class ResponseHandler {
    constructor() {}
    
    respS(res, data, message) {
        return res.status(200).json({
            status: 200,
            message: message || '-SUCCESS',
            data
        })
    }

    respF(res, data, message) {
        return res.status(400).json({
            status: 400,
            message: message || 'Bad request.',
            data
        })
    }

}

const handler = new ResponseHandler();

module.exports = handler;