const express = require('express');
const { converTiempoController } = require('../controllers/tiempoController');

const router = express.Router();

router.post('/convertir', converTiempoController);

module.exports = router;