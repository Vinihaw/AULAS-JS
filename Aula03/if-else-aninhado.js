let nota1, nota2, media, faltas

nota1 = 6
nota2 = 6
media = (nota1 + nota2) / 2
faltas = 10

if (media >= 7) {
    console.log(`Aprovado com a média ${media}`);
} else if (media >= 6.5) {
    console.log(`Ap. Conselho com a média ${media}`);
} else if (media >= 6) {
    console.log(`Média: ${media} \nAluno deve entregar atividade para compor nota.` );
} else {
    console.log(`Reprovado com a média ${media}`);
} 