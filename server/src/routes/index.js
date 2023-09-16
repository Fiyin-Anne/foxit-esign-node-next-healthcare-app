const { Router } = require('express');
const router = Router();

const { tracker } = require('../controllers/foxit-esign');
const { register, update, download } = require('../controllers/registration');

router.post('/api/esign-tracker', tracker);
router.post('/api/patient/register', register);
router.post('/api/patient/update', update);
router.post('/api/patient/download', download);

module.exports = router;