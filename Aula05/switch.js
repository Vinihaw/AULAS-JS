let avaliacao = `A1`

switch (avaliacao) {
    case `A1`:
        console.log(`Sua avaliação é: Péssimo.`);
        break;
    case `A2`:
        console.log(`Sua avaliação é: Ruim.`);  
        break;
    case `A3`:
        console.log(`Sua avaliação é: Regular.`);  
        break;
    case `A4`:
        console.log(`Sua avaliação é: Bom.`);  
        break;
    case `A5`:
        console.log(`Sua avaliação é: Excelente.`);  
        break;
    default:
        console.log(`Atendimento não avaliado.`);
        break;
}