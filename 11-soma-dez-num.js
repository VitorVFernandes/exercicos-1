const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let num1 = Number(prompt(`Digite o primeiro número:`));
let num2 = Number(prompt(`Digite o segundo número:`));
let num3 = Number(prompt(`Digite o terceiro número:`));
let num4 = Number(prompt(`Digite o quarto número:`));
let num5 = Number(prompt(`Digite o quinto número:`));

let soma = 0;

for(let x = 0; x <= 5; x++){
    soma = (num1 + num2 + num3 + num4 + num5)
}

 console.log(`A soma total é: ${soma}`)

