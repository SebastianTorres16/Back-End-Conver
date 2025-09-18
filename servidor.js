const express = require('express');
const cors = require('cors');

const tiempoRoutes = require('./routes/tiempoRoutes');
const pesoRoutes = require('./routes/pesoRoutes');
const temperaturaRoutes = require('./routes/temperaturaRoutes');
const monedaRoutes = require('./routes/monedaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/tiempo', tiempoRoutes);
app.use('/api/peso', pesoRoutes);
app.use('/api/temperatura', temperaturaRoutes);
app.use('/api/moneda', monedaRoutes);

app.get('/', (req, res) => {
    res.json({ mensaje: 'API de Conversiones funcionando correctamente' });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});