const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let nota = Number(prompt(`Coloque sua nota:`))

if(nota <= 4){
    console.log(`Sua nota foi ${nota}: REPROVADO!`)
}
else if(nota >= 5 && nota < 7){
    console.log(`Sua nota foi ${nota}: RECUPERAÇÃO`)
}
else if(nota >= 7){
    console.log(`Sua nota foi ${nota}: APROVADO!`)
}