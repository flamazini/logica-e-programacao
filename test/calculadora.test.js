const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', function () {
    it('A função deve ser capaz de realizar Soma de Dois Numeros Positivos', function (){
        //COLETA O RESULTADO DA FUNÇÃO
        const resultadoDaSoma = somarDoisNumeros(5, 3);
        //COMPARA O RESULTADO COM O VALOR QUE VOCE ESPERA
        expect(resultadoDaSoma).to.equal(8);
    });

    it('A Função deve ser capaz de realizar soma de um numer positico com um numero negativo', function (){
        const resultadoDaSoma = somarDoisNumeros(50, -15);
        expect(resultadoDaSoma).to.equal(35);
    });

    it('A função deve ser capaz de realizar a soma de Dois numeros negativos', function(){
        const resultadoDaSoma = somarDoisNumeros(-5, -3);
        expect(resultadoDaSoma).to.equal(-8);
    });

});
