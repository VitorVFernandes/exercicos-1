const prompt = require("prompt-sync")();

let a = 0;
let b = 1;

let ter = Number(prompt("Quantos termos de sequencia de Fibonacci você quer ver?"))

console.log(`Sequência de Fibonacci: `);

for(let i = 0; i < ter; i++){
    console.log(a);
    let prox = a + b;
    a = b;
    b = prox;
}

