// Faça um programa para calcular o valor de uma viagem:

// Você terá variáveis. Sendo elas:
// 1 - Preço do etanol
// 2 - Preço da gasolina
// 3 - O tipo de combustivel que está no seu carro
// 4 - Gasto médio de combustivel do carro por KM
// 5 - Distancia em Km da viagem

// Imprima no console o valor que será fasto para realizar está viagem:

// DECLAREI AS VARIAVEIS VAZIAS QUE VAMOS PRECISAR PARA O CALCULO
let precoGasolina = "5.5";
let precoAlcool = "3.5";
let tipoCombustivel = "G";
let gastoMedioCombustivelPorLitro = "10";
let distanciaEmKm = "1000";

// Calculando já quanto vai consumir de litros efetuando o deslocamento dessa distancia
const litrosConsumidos = distanciaEmKm / gastoMedioCombustivelPorLitro;

  if (tipoCombustivel == "A") {
    const totalGastoNaViagem = litrosConsumidos * precoAlcool;
    const totalGastoNaViagemFormatado = totalGastoNaViagem.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" });
      console.log(totalGastoNaViagemFormatado);
  } else {
    const totalGastoNaViagem = litrosConsumidos * precoGasolina;
    const totalGastoNaViagemFormatado = totalGastoNaViagem.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" });
      console.log(totalGastoNaViagemFormatado);
  }

