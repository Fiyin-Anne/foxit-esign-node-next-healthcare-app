const models = require('../database/models/index');

const register_user = async (data) => {

    const { bio_data, address, insurance_details, physician_details, health_description } = data;
    let existing_patient = await models.Patient.findOne({ where: {
        email: bio_data.email
    }})

    if (existing_patient) throw new Error('Patient data already exists.');

    let new_patient = await models.Patient.create({
        ...bio_data,
        ...address,
        ...insurance_details,
        ...physician_details,
        ...health_description
    })

    return {
        message: "Patient successfully created."
    }
}

module.exports = {
    register_user
}