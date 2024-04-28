//14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 0;

while(true) {
    let n = parseFloat(prompt(`Digite o ${quantidade + 1}º número: `));
    if (n === 0) {
        break;
    }
    if (!isNaN(n)) {
        soma += n;
        quantidade++;
    }
}

console.log(`Média aritmética: ${(soma / quantidade).toFixed(2)}`);