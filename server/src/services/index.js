const models = require('../database/models/index');
const { generateSigningSession, downloadDocument } = require('./foxit-esign');

const registration = async (data) => {
    const { firstName, lastName, email } = data;

    let patient = await models.PatientRegistration.findOne({ where: {
        email
    }})

    let embedSessionUrl;
    if (!patient) {
        
        patient = await models.PatientRegistration.create({
            firstName,
            lastName,
            email
        })
    }

    if (patient.signingSuccess) throw new Error('Patient registration data already exists.');

    if(!patient.embedSessionUrl) {
        embedSessionUrl = await generateSigningSession({ id: patient.id, firstName, lastName, email });

        await patient.update({
            embedSessionUrl
        })
    }

    return {
        data: {
            id: patient.id,
            firstName,
            lastName,
            email,
            embedSessionUrl: patient.embedSessionUrl
        }
    }
}

const updateRecord = async (data) => {

    const { folderId, id, signingSuccess } = data;

    const existingPatient = await models.PatientRegistration.findOne({ where: {
        id
    }})

    if (!existingPatient) throw new Error('Patient not found.');

    let updatedRecord = await models.PatientRegistration.update(
        { folderId, signingSuccess },
       { where: { id }}
    )

    return {
        data: updatedRecord,
        message: "Record successfully updated."
    }
}

const generateDownloadUrl = async (data) => {
    const { firstName, lastName, email } = data;

    const existingPatient = await models.PatientRegistration.findOne({ where: {
        firstName, lastName, email
    }})

    if (!existingPatient) throw new Error('Patient not found.');
    if (!existingPatient.folderId) throw new Error('Patient folderId not found.');

    const downloadUrl = await downloadDocument({ folderId: existingPatient.folderId });

    return {
        data: { downloadUrl }
    }
}


const eventTracker = async (eventData) => {
    const { io } = require('../../index');
    try {
        let { event_name, event_date, data } = eventData;
        let { signing_party } = data;
        let message = `New signature from ${signing_party.firstName} ${signing_party.lastName}.`
        if (event_name === "folder_signed") {
            io.emit('notifications', {
                dateSigned: event_date,
                message
            });
        }
        
        return true;
    } catch (err) {
        throw new Error(err.message)
    }
}

module.exports = { registration, updateRecord, generateDownloadUrl,  eventTracker }