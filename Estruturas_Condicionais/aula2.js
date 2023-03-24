// APRENDENDO SOBRE BOOLEAN DESCOBRINDO SE UM NUMERO É PAR

const numero = 2;
// FAZENDO UMA FUNCTION PARA VERICAR SE É PAR A VARIAVEL NUMBER ACIMA
function ePar(numero) {
    //USANDO OPERADOR % PARA DESCOBRIR SE TEM RESTO NA DIVISÃO CONSEQUENTEMENTE É PAR
    const numeroPar =  (numero % 2) === 0;
    return numeroPar;
}
// APRENDENDO A UTILIZAR O CONDICIONAL IF e ELSE
// IMPRIMIR NO CONSOLE SOMENTE SE FOR PAR

if(numero === 0){
    console.log('Numero inválido escolha outro!')
} else if (ePar(numero)) {
    console.log('Eu sou Par');
} else {
    console.log('Eu sou Impar')
}

