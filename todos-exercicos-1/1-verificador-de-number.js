const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let numero = prompt('escolha um numero para verificar:');

if(numero < 0){
    console.log(`${numero} é negativo`);
} else if(numero > 0){
    console.log(`${numero} é positivo`);
} else if(numero = 0){
    console.log(`${numero} é neutro`);
}