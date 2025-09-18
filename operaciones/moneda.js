const converMoneda = (valor, unidadOrigen, unidadDestino) => {
    const tasasCambio = {
        'USD': 1,
        'EUR': 0.85,
        'COP': 4000,
        'GBP': 0.73
    };
    
    if (!tasasCambio[unidadOrigen] || !tasasCambio[unidadDestino]) {
        throw new Error('Moneda no soportada');
    }

    const valorEnUSD = valor / tasasCambio[unidadOrigen];
    const resultado = valorEnUSD * tasasCambio[unidadDestino];
    
    return resultado;
};

module.exports = {
    converMoneda
};