const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let acao = Number(prompt(`O que você deseja?:
    1 - Adicionar tarefa.
    2 - Listar.
    3 - Remover
Escolha a opção:`))

switch(acao){
    case 1:
        console.log(`Opção ${acao} -> Tarefa adicionada!`);
        break;
    case 2 :
        console.log(`Opção ${acao} -> Tarefa Listada!`);
        break;
    case 3:
        console.log(`Opção ${acao} -> Tarefa Removida!`);
        break;
}

