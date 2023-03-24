// function meuNomeEh(nome) {
//     return 'Meu nome é ' + nome;    
// };

// function verificaIdade(idade) {
//     if (idade >= 18) {
//         return 'Vocé é maior de idade e tem ' + idade;
//     }else {
//         return 'Vocé é menor de idade e tem ' + idade;
//     }
// };

// (function printDados(nome, idade) {
//     nome = 'Higor';
//     idade = 11;
//     const meusDados = meuNomeEh(nome) + ' ' + verificaIdade(idade);
//     console.log(meusDados);
// })();


// APLICAR DESCONTO E ADICIONAR JUROS A PRODUTOS

// FUNÇÃO DE CALCULO DE JUROS
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

// FUNÇÃO DE CALCULO DE JUROS
function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

    if (formaDePagamento === 1) {
        console.log(aplicarDesconto(precoEtiqueta, 10))
    } else if (formaDePagamento === 2) {
        console.log(aplicarDesconto(precoEtiqueta , 15))
    } else if (formaDePagamento === 3) {
        console.log('O preço é ' +  precoEtiqueta)
    } else {
        console.log(aplicarJuros(precoEtiqueta, 10));
    }
