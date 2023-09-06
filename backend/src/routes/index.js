const routes = require('express').Router();
const registration = require('../controllers/registration');

routes.post('/api/register', registration.registration)

module.exports = routes;