const { 
    bio_data_schema,
    insurance_schema,
    address_schema,
    physician_schema,
    health_description_schema,
} = require('../helpers/validators/schemas');

const validate = require('../helpers/validators');
const handler = require('../helpers/response_handler');

const {register_user} = require('../service/register');

const registration = async (req, res) => {

    try {
        console.log("req.body:::::::>", req.body)
        const { bio_data, address, insurance_details, physician_details, health_description } = req.body;

        const valid_bio_data = validate(bio_data, bio_data_schema);
        const valid_address = validate(address, address_schema);
        let valid_insurance_details = validate(insurance_details, insurance_schema);
        const valid_physician_details = validate(physician_details, physician_schema);
        const valid_health_description = validate(health_description, health_description_schema);

        let response = await register_user({ 
            bio_data: valid_bio_data, 
            address: valid_address, 
            insurance_details: valid_insurance_details, 
            physician_details: valid_physician_details,
            health_description: valid_health_description
        })

        handler.respS(res, response)

    } catch (err) {
        handler.respF(res, null, err.message)
    }
    
}

module.exports = {
    registration
}