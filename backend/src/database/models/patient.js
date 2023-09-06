'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init({
    patient_name: DataTypes.STRING,
    filler_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    social_security_number: DataTypes.NUMBER,
    dob: DataTypes.DATE,
    weight: DataTypes.STRING,
    height: DataTypes.STRING,
    gender: DataTypes.STRING,
    language: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    has_insurance: DataTypes.BOOLEAN,
    primary_insurance: DataTypes.STRING,
    primary_insurance_id: DataTypes.NUMBER,
    secondary_insurance: DataTypes.STRING,
    secondary_insurance_id: DataTypes.NUMBER,
    health_description: DataTypes.STRING,
    physician_name: DataTypes.STRING,
    physician_phone_number: DataTypes.STRING,
    physician_address: DataTypes.STRING,
    physician_fax: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};