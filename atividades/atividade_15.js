//15. Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

const prompt = require('prompt-sync')();

let valores = 0;
let pesos = 0;

let contador = 1;
while(true) {
    let valor = parseFloat(prompt(`Digite o ${contador}º número: `));
    if (valor === 0) {
        break;
    }
    let peso = parseFloat(prompt(`Digite o peso do ${contador}º número: `));

    if (!isNaN(valor) && !isNaN(peso)) {
        valores += valor * peso;
        pesos += peso;
        contador++
    }
}

console.log(`Média ponderada: ${(valores/pesos).toFixed(2)}`);