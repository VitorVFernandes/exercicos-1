const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let idade = Number(prompt('Diga sua idade:'));

if (idade < 14){
    console.log(`Sua idade é ${idade},logo você é criança`)
} else if(idade >= 14 && idade <= 18){
    console.log(`Sua idade é ${idade},logo você é adolescente`);
}else if(idade >= 18 && idade <= 50){
    console.log(`Sua idade é ${idade},logo você é adulto`);
}else if(idade > 50){
    console.log(`Sua idade é ${idade},logo você é idoso`);
}