const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let numtabuada = Number(prompt(`Escolha a tabuada:`));

for(let i = 0; i <= 10; i++){
    console.log(`${numtabuada} x ${i} = ${(numtabuada * i)}`)
}