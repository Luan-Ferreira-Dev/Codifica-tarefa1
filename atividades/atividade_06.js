/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require('prompt-sync')();

let a = parseInt(prompt("Digite o lado A: "));
let b = parseInt(prompt("Digite o lado B: "));
let c = parseInt(prompt("Digite o lado C: "));

let tipo;

if (a < (b + c) && b < (a + c) && c < (a + b)) {
    if (a === b && b === c) {
        tipo = "eqüilátero";
    } else if (a !== b && b !== c) {
        tipo = "escaleno";
    } else {
        tipo = "isósceles";
    }
    console.log(`Triângulo ${tipo}`)
} else {
    console.log("Os lados não formam um triângulo")
}
