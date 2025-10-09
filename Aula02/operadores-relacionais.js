let media, nome, media_ios = 7;

nome = `Emanuel`
media = 7
falta = 5

// > maior
console.log(media > media_ios);

// >= maior ou igual
console.log(media >= media_ios);

// < menor
console.log(media < media_ios);

// <= menor ou igual
console.log(media <= media_ios);

// == igual
console.log(falta == 5);

// === valores e tipos iguais
console.log(6 === 5);

// != diferente
console.log(8 != 7);

console.log(`====================`);

console.log(typeof nome);
console.log(6 >= 10);

// Finds Quintão | 500 o valor mínimo
let dinheiros = 500;
let sol = true;

let finds = dinheiros >= 500 && sol == true ? `Vou pra PRAIA!` : `Não vou pra PRAIA`
console.log(finds);

finds = dinheiros >= 600 || sol == true ? `Vou pra PRAIA!` : `Não vou pra PRAIA`
console.log(finds);
console.log(`Tem sol hoje? ${!sol}`);


