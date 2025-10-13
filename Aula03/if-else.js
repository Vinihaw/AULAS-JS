let nota1, nota2, media, faltas

nota1 = 8
nota2 = 8
media = (nota1 + nota2) / 2
faltas = 5

if (media >= 7 && faltas <= 5) {
//Verdadeiro
    console.log(`Aluno aprovado com a nota ${media} \nFaltas: ${faltas}`);
} else {
//Falso
    console.log(`Aluno reprovado com a nota ${media} \nFaltas: ${faltas}`);
}

console.log(`Final do programa.`);
