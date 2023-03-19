// Crie um algoritimo faça a media de das 3 notas tiradas pelo aluno no semestre na faculdade.Crie

// Média = (nota 1 + nota 2 + nota 3 ) / 3;

// Classificação:
// - Media menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

const nota1 = 10;
const nota2 = 6;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
const mediaFormata = media.toFixed(2)
console.log(mediaFormata);

if (media < 5) {
    console.log('O aluno foi reprovado!')
} else if (media >= 5 && media <= 7) {
    console.log('O aluno ficou de recuperação!')
} else {
    console.log('O aluno foi Aprovado!')
}
