const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let peso = Number(prompt("Qual seu peso?"));

let altura = Number(prompt("Qual sua altura?"));

let resultado;

resultado = peso / (altura * altura)

if(resultado <= 18.5){
    console.log("Abaixo do peso")
}else if(resultado >= 18.5 && resultado <= 25){
    console.log("Peso normal")
}else if(resultado >= 25 && resultado <= 30){
    console.log("Sobrepeso")
}else if(resultado >= 30 && resultado <= 40){
    console.log("Obesidade grau I")
}else if(resultado > 40){
    console.log("Obesidade grau II")
}
