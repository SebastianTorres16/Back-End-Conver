
const converPeso = (valor, unidadOrigen, unidadDestino) => {
    let valorEnGramos;
    switch (unidadOrigen) {
        case 'gramos':
            valorEnGramos = valor;
            break;
        case 'kilogramos':
            valorEnGramos = valor * 1000;
            break;
        case 'libras':
            valorEnGramos = valor * 453.592;
            break;
        case 'onzas':
            valorEnGramos = valor * 28.3495;
            break;
        default:
            throw new Error('Unidad desconocida');
    }

    let resultado;
    switch (unidadDestino) {
        case 'gramos':
            resultado = valorEnGramos;
            break;
        case 'kilogramos':
            resultado = valorEnGramos / 1000;
            break;
        case 'libras':
            resultado = valorEnGramos / 453.592;
            break;
        case 'onzas':
            resultado = valorEnGramos / 28.3495;
            break;
        default:
            throw new Error('Unidad no válida');
    }
    
    return resultado;
};

module.exports = {
    converPeso
};