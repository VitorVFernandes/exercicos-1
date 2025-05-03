const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let qntd = Number(prompt(`Escolha a quantidade de maçãs:`));

if(qntd <= 6){
    console.log(`Serão: ${qntd} maçãs`)
    console.log(`O valor a se pagar: R$ ${(qntd * 0.30).toFixed(1)}`)
} else if (qntd > 6){
    console.log(`Serão: ${qntd} maçãs`)
    console.log(`O valor a se pagar: R$ ${(qntd * 0.25).toFixed(2)}`)}
