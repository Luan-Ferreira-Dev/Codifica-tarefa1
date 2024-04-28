//5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0

const prompt = require('prompt-sync')();

let prova1 = parseFloat(prompt("Digite a nota da 1º avaliação: "));
let prova2 = parseFloat(prompt("Digite a nota da 2º avaliação: "));

let media = (prova1 + prova2) / 2;

if (media >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado");
} else {
    console.log("Você foi REPROVADO! Estude mais");
}
