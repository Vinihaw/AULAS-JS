let nota, faltas
nota = 6
faltas = 3

if (nota >= 6 && faltas <= 4) {
    console.log(`Aprovado!`);
} else if (nota >= 6 && faltas > 4) {
    console.log(`Reprovado por Faltas!`);
} else {
    console.log(`Reprovado por nota!`);
}