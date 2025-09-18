const converTiempo = (valor, unidadOrigen, unidadDestino) => {
  const factores = {
    segundos: 1,
    minutos: 60,
    horas: 3600,
    dias: 86400
  };

  if (!factores[unidadOrigen]) throw new Error('Unidad de origen no válida');
  if (!factores[unidadDestino]) throw new Error('Unidad de destino no válida');

  return (valor * factores[unidadOrigen]) / factores[unidadDestino];
};

module.exports = { converTiempo };
