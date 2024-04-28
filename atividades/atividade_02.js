//2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require('prompt-sync')();


let eleitores = parseInt(prompt("Digite o número de eleitores do município: "))
let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

console.log(`${(votosBrancos * 100 / eleitores).toFixed(2)}% votaram em branco`);
console.log(`${(votosNulos * 100 / eleitores).toFixed(2)}% tiveram votos nulos`);
console.log(`${(votosValidos * 100 / eleitores).toFixed(2)}% foram votos válidos`);