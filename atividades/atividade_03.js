/*3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)dos primeiros três inteiros.
*/

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite o primeiro inteiro: "));
let n2 = parseInt(prompt("Digite o segundo inteiro: "));
let n3 = parseInt(prompt("Digite o terceiro inteiro: "));
let n4 = n1 + n2 + n3;


console.log(`${n1} + 25 = ${n1 + 25}`);
console.log(`${n2} x 3 = ${n2 * 3}`);
console.log(`12% de ${n3} = ${(12/100 * n3).toFixed(2)}`);
console.log(`${n1} + ${n2} + ${n3} = ${n4}`);
