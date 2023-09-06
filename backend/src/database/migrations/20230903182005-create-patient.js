'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_name: {
        type: Sequelize.STRING
      },
      filler_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      social_security_number: {
        type: Sequelize.INTEGER
      },
      dob: {
        type: Sequelize.DATE
      },
      weight: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      has_insurance: {
        type: Sequelize.BOOLEAN
      },
      primary_insurance: {
        type: Sequelize.STRING
      },
      primary_insurance_id: {
        type: Sequelize.INTEGER
      },
      secondary_insurance: {
        type: Sequelize.STRING
      },
      secondary_insurance_id: {
        type: Sequelize.INTEGER
      },
      health_description: {
        type: Sequelize.STRING
      },
      physician_name: {
        type: Sequelize.STRING
      },
      physician_phone_number: {
        type: Sequelize.STRING
      },
      physician_address: {
        type: Sequelize.STRING
      },
      physician_fax: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patients');
  }
};