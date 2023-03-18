// DESAFIO DE PROGRAMAÇÃO JAVASCRIPT

// Faça um programa para calcular o valor gasto em combustível na viagem:

// Você terá 3 variaveis. Elas são:
//  - Preço do combustível;
//  - Gasto médio de combustivel do carro por KM;
//  - Distancia em KM;

// Imprima no console o valor gasto no final

// DECLAREI AS VARIAVEIS VAZIAS QUE VAMOS PRECISAR PARA O CALCULO
let precoCombustivel = '';
let gastoMedioCombustivelPorLitro = '';
let distanciaEmKm = '';

// FIZ UMA FUNÇÃO ONDE TEREMOS COMO CALCULAR DENTRO DELA O VALOR GASTO NA VIAGEM DE CONSUMO DE COMBUSTIVEL
function CalculoGastoCombustivel( precoCombustivel, gastoMedioCombustivelPorLitro, distanciaEmKm) {
    // FAZENDO OS CALCULOS PARA DESCOBRIR O RESULTADO DO PROBLEMA
    const litrosConsumidos = (distanciaEmKm / gastoMedioCombustivelPorLitro);
    const totalGastoNaViagem = (litrosConsumidos * precoCombustivel);
    // FORMATANDO O RESULTADO PARA MOEDA E RETORNANDO O VALOR
    const totalGastoNaViagemFormatado = totalGastoNaViagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return totalGastoNaViagemFormatado;
}

// EXIBINDO NO CONSOLE E PASSANDO OS DADOS DAS VARIAVEIS CRIADAS ACIMA:
console.log('O total gasto foi de ' + CalculoGastoCombustivel(5.88, 10, 1000));