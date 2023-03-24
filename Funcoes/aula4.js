
// function meuNomeEh(nome) {
//     console.log('Meu nome é ' + nome);    
// }

// meuNomeEh('Higor');
// meuNomeEh('Margaux');

// function numeroAoQuadrado(valor) {
//     return valor * valor;  
// }

// const resultQuadrado = numeroAoQuadrado(10);
// console.log(resultQuadrado);

// function adicionarJuros(valor, percentualJuros) {
//     const valorDeAcrescimo = (percentualJuros / 100) * valor;  
//     return valor + valorDeAcrescimo;
// }

// const resultJuros = adicionarJuros(100, 10);
// console.log(resultJuros);

// 1º Passo separando as partes da funções (criando / realizando o calculo da média)
function calcularMedia(nota1,nota2,nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    const mediaFormata = media.toFixed(2)
    return mediaFormata;
}

// 2º Passo separando as partes da funções (Logica para fazer a verificação da nota e returnar o status do aluno de acordo com o valor da media)
function imprimirStatus(mediaFormata) {
    if (mediaFormata < 5) {
       return 'O aluno foi reprovado!';
    } else if (mediaFormata >= 5 && mediaFormata <= 7) {
        return 'O aluno ficou de recuperação!';
    } else {
        return 'O aluno foi Aprovado!';
    }
}

// 3º Passo separando as partes da funções (Função principal que vai abrigar as variveis 
// de notas e vai executar as subfunções acima e imprimir o console log.)
// 4º Passo separando as partes da funções (Executando as funções acima de maneira anonima atraves de outra function)
(function () {
    const nota1 = 10;
    const nota2 = 6;
    const nota3 = 7;

    const statusDoAluno = calcularMedia(nota1,nota2,nota3);
    console.log(imprimirStatus(statusDoAluno));
})();



