//4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).

const prompt = require('prompt-sync')();

let prova1 = parseFloat(prompt("Digite a nota da 1º avaliação: "));
let prova2 = parseFloat(prompt("Digite a nota da 2º avaliação: "));

let media = (prova1 + prova2) / 2;

if (media >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado");
}