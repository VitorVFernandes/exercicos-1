const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let num1 = Number(prompt(`Digite um número inteiro:`));

for(let x = 0; x <= 10; x++){
    console.log( num1 )
}