const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let resultado = 1;

let num = Number(prompt(`Digite o número para saber o fatorial:`));

for(let i = num; i >= 1; i--){
    resultado *= i;
}
console.log(`O fatorial de ${num} é: ${resultado}`);