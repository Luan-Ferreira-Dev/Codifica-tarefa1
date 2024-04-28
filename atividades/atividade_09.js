/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:
1 - Sul         5 ou 6      - Nordeste
2 - Norte       7, 8, ou 9  - Sudeste
3 - Leste       10 até 20   - Centro-Oeste
4 - Oeste       25 até 50   - Nordeste
Fora dos intervalos - Produto Importado
*/
const prompt = require('prompt-sync')();
let codigo = parseInt(prompt("Digite o código do produto: "));
switch(true) {
    case (codigo === 1):
        console.log("Sul")
        break;
    case (codigo === 2):
        console.log("Norte");
        break;
    case (codigo === 3):
        console.log("Leste");
        break;
    case (codigo === 4):
        console.log("Oeste");
        break;
    case (codigo <= 6):
        console.log("Nordeste");
        break;
    case (codigo <= 9):
        console.log("Sudeste");
        break;
    case (codigo <= 20):
        console.log("Centro-Oeste")
        break;
    case (codigo >= 25 && codigo <= 50):
        console.log("Nordeste");
        break;
    default:
        console.log("Produto Importado");
}