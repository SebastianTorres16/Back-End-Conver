const express = require('express');
const { converMonedaController } = require('../controllers/monedaController');

const router = express.Router();

router.post('/convertir', converMonedaController);

module.exports = router;