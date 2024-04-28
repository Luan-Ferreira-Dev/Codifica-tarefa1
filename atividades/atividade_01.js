//1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
let fahrenheit = (celsius * 1.8) + 32;
console.log(`${celsius} ºC equivalem a ${fahrenheit} ºF`);