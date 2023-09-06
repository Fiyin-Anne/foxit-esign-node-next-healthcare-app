const Joi = require('joi');

const bio_data_schema = Joi.object({
    is_patient: Joi.boolean().default(true),
    patient_fullname: Joi.string(),
    filler_name: Joi.string(),
    date: Joi.date(),
    phone_number: Joi.string(),
    email: Joi.string().email(),
    social_security_number: Joi.number(),
    dob: Joi.date(), // 1-12-1998
    weight: Joi.number(),
    height: Joi.number(),
    gender: Joi.string().valid('Male', 'Female', 'Other'),
    language: Joi.string(),
})

const address_schema = Joi.object({
    address: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    zip: Joi.string()
})

const physician_schema = Joi.object({
    name: Joi.string(),
    phone_number: Joi.number().strict(),
    address: Joi.string(),
    fax: Joi.number().strict()
})

const insurance_schema = Joi.object({
    has_insurance: Joi.boolean().default(false),
    primary_insurance: Joi.string(),
    primary_insurance_id: Joi.number().strict(),
    secondary_insurance: Joi.string(),
    secondary_insurance_id: Joi.number().strict()
})

const health_description_schema = Joi.string().max(400)

module.exports = {
    bio_data_schema, insurance_schema, physician_schema, address_schema, health_description_schema
}