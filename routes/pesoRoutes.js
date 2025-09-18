const express = require('express');
const { converPesoController } = require('../controllers/pesoController');

const router = express.Router();

router.post('/convertir', converPesoController);

module.exports = router;