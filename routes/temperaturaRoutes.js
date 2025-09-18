const express = require('express');
const { converTempController } = require('../controllers/temperaturaController');

const router = express.Router();

router.post('/convertir', converTempController);

module.exports = router;