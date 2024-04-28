//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite o 1º valor: "));
let n2 = parseInt(prompt("Digite o 2º valor: "));

if (n1 < n2) {
    console.log(`${n1} ${n2}`);
} else {
    console.log(`${n2} ${n1}`);
}

