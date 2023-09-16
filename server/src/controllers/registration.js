const { registration, downloadUrl, updateRecord } = require('../services/patient');
const { respF, respS } = require('../utils/responsehandler');
const { patientRegistrationSchema, recordUpdateSchema, downloadSchema } = require('../utils/validator/schemas');
const validate = require('../utils/validator');

const register = async (req, res) => {
    try {
        let validatedData = validate(req.body, patientRegistrationSchema);
        let response = await registration(validatedData);
        respS(res, response.data, response.message);
    } catch (err) {
        respF(res, null, err.message)
    }
}

const update = async (req, res) => {
    try {
        // validate here
        let validatedData = validate(req.body, recordUpdateSchema);
        let response = await updateRecord(validatedData);
        respS(res, response.data, response.message);
    } catch (err) {
        respF(res, null, err.message)
    }
}

const download = async (req, res) => {
    try {
        // validate here
        let validatedData = validate(req.body, downloadSchema);
        let response = await downloadUrl(validatedData);
        respS(res, response.data, response.message);
    } catch (err) {
        respF(res, null, err.message)
    }
}

module.exports = { register, update, download };