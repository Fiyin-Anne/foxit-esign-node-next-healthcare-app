const { Router } = require('express');
const router = Router();

const { register, update, download,  trackEvent } = require('../controllers');

router.post('/api/esign-tracker',  trackEvent);
router.post('/api/patient/register', register);
router.post('/api/patient/update', update);
router.post('/api/patient/download', download);

module.exports = router;