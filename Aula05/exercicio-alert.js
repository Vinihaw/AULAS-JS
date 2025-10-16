let nome, nota1, nota2, faltas
nome = prompt (`Qual o seu nome?`)
nota1 = Number (prompt(`Qual foi sua primeira nota?`))
nota2 = Number (prompt (`Qual foi sua segunda nota?`))
faltas = Number (prompt (`Quantas faltas?`))
media = (nota1 + nota2) / 2

if (media >= 7 && faltas < 6) {
    alert(`Aprovado! \nMédia: ${media} \nFaltas: ${faltas}`);
} else {
    alert(`Reprovado! \nMédia: ${media} \nFaltas: ${faltas}`);
} 