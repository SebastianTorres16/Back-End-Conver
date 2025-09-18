const converTemp = (valor, unidadOrigen, unidadDestino) => {
  const aCelsius = {
    celsius: v => v,
    fahrenheit: v => (v - 32) * 5/9,
    kelvin: v => v - 273.15
  };

  const desdeCelsius = {
    celsius: v => v,
    fahrenheit: v => (v * 9/5) + 32,
    kelvin: v => v + 273.15
  };

  if (!aCelsius[unidadOrigen]) throw new Error('Unidad de origen no válida');
  if (!desdeCelsius[unidadDestino]) throw new Error('Unidad de destino no válida');

  return desdeCelsius[unidadDestino](aCelsius[unidadOrigen](valor));
};

module.exports = { converTemp };
