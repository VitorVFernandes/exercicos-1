const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let num1 = Number(prompt(`Escolha um valor-->`));
let num2 = Number(prompt(`Escolha outro valor-->`));

if(num1 === num2){
    console.log(`Os valores não podem ser iguais!`)
} else if(num1 > num2){
    console.log(`Ordem crescente(do maior para o menor):${num1} e ${num2}`)
}else if(num2 > num1){
    console.log(`Ordem crescente(do maior para o menor): ${num2} e ${num1}`) 
}