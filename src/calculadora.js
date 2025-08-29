function somarDoisNumeros(valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

function resultadoDaMediaDeDoisNumeros(valor1, valor2){
// soma dois valores
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
// divide pelo numero de valores
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;
// resultado
    return resultadoDaMediaDeDoisValores;
}
module.exports = {
    somarDoisNumeros
}