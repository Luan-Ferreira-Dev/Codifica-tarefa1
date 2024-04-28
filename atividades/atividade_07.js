/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
*/
const prompt = require('prompt-sync')();

let quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));
let valor = 0.30;
if (quantidade >= 12) {
    valor = 0.25;
}
let total = quantidade * valor;
console.log(`Total: R$ ${total.toFixed(2)}`);