/*
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

let primos = 0;
let n = 100;


while (primos < 50) {
    let divisivel = 0;

    let i = 1;
    while(i * i <= n) {
        if (n % i === 0) {
            divisivel++;
        }
        i++;
    }

    if (divisivel === 1) {
        console.log(n)
        primos++;
    }
    
    n++;
}
