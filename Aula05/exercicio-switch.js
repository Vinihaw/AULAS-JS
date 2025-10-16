switch (prompt (`Que dia da semana é hoje?`)){
    case `1`:
        alert(`Hoje é: Segunda.`);
        break;
    case `2`:
        alert(`Hoje é: Terça.`);  
        break;
    case `3`:
        alert(`Hoje é: Quarta.`);  
        break;
    case `4`:
        alert(`Hoje é: Quinta.`);  
        break;
    case `5`:
        alert(`Hoje é: Sexta.`);  
        break;
    case `6`:
        alert(`Hoje é: Sábado.`);  
        break;
    case `7`:
        alert(`Hoje é: Domingo.`);  
        break;
        default:
        alert(`Não informado o dia.`);
        break;
}