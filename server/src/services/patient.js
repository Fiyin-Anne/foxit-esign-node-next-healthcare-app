const models = require('../database/models/index');
const { generateSigningSession } = require('./generateSigningSession');
const { downloadDocument } = require('./downloadSignedDocument');

const registration = async (data) => {
    const { firstName, lastName, email } = data;

    const existingPatient = await models.PatientRegistration.findOne({ where: {
        email
    }})

    if (existingPatient) throw new Error('Patient data already exists.');

    let newPatient = await models.PatientRegistration.create({
        firstName,
        lastName,
        email
    })

    let embedSessionUrl;
    if(newPatient) {
        // generate the signing session
        embedSessionUrl = await generateSigningSession(newPatient);
    }

    return {
        data: {
            id: newPatient.id,
            firstName: newPatient.firstName,
            lastName: newPatient.lastName,
            email: newPatient.email,
            embedSessionUrl
        },
        message: "Patient successfully created."
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

const downloadUrl = async (data) => {
    const { firstName, lastName, email } = data;

    const existingPatient = await models.PatientRegistration.findOne({ where: {
        firstName, lastName, email
    }})

    if (!existingPatient) throw new Error('Patient not found.');
    if (!existingPatient.folderId) throw new Error('Patient folderId not found.');

    const downloadUrl = await downloadDocument({ folderId: existingPatient.folderId });

    return {
        data: downloadUrl
    }
}

module.exports = { registration, updateRecord, downloadUrl }