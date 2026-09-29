const MeuArray = require("./MeuArray");

const tarefas = new MeuArray();

//Adicionar elemento
tarefas.adicionar("Levantar requisitos");
tarefas.adicionar("Criar um formulário");
tarefas.adicionar("Tomar café");
tarefas.adicionar("Ir embora o mais rápido possível");
tarefas.adicionar("Tomarcafé");

console.log();
tarefas.toString();
console.log(`Você tem ${tarefas.tamanhoArray()} tarefas.`);

//Contar índice
const Pimeiratarefa = tarefas.obterElemento(0);
const Segundatarefa = tarefas.obterElemento(1);
const Terceiratarefa = tarefas.obterElemento(2);
const Quartatarefa = tarefas.obterElemento(3);
const Quintatarefa = tarefas.obterElemento(4);

console.log("ID:",0,Pimeiratarefa);
console.log("ID:",1,Segundatarefa);
console.log("ID:",2,Terceiratarefa);
console.log("ID:",3,Quartatarefa);
console.log("ID:",4,Quintatarefa);

//Procurar repetido
const PrimeiroRepetido = tarefas.obterIndice(Terceiratarefa);
const SegundoRepetido = tarefas.obterIndice(Quintatarefa);
console.log("Você tem itens repetidos:");
console.log(PrimeiroRepetido);
console.log(SegundoRepetido);

//Remover item
const RemoveItem = tarefas.remover();
console.log("A tarefa",RemoveItem, "foi removida" );
tarefas.toString();

//usar-> node ArrayMeusMetodosapp.js