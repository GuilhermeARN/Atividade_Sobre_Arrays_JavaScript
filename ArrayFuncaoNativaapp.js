const MeuArray = require("./MeuArray");

const tarefas = new MeuArray();

const Minhastarefas = ["Levantar requisitos","Criar um formulário","Tomar café","Ir embora o mais rápido possível"];
console.table(Minhastarefas)

//----------------------------Métodos Nativos----------------------------------------
    //MÉTODOS push()
    Minhastarefas.push('Tomar café');
    

    //MÉTODO find()______Conta_O_índice______________________________________________
    const contagem = [
        {id: 0, nome: 'Levantar requisitos'},
        {id: 1, nome: 'Criar um formulário'},
        {id: 2, nome: 'Tomar café'},
        {id: 3, nome: 'Ir embora o mais rápido possível'},
        {id: 4, nome: 'Tomar café'}
    ];

    const PrimeiraConta = contagem.find(c => c.id === 2);
    const SegundaConta = contagem.find(c => c.id === 4);

    //indexOf()____________________________________________________
    const ProcuraDuplo = ['Levantar requisitos', 'Criar um formulário', 'Tomar café', 'Ir embora o mais rápido possível','Tomar café'];
    const PrimeiroItemDuplo = 'Tomar café';

    const posicaoBloqueio = ProcuraDuplo.indexOf(PrimeiroItemDuplo);

    if(posicaoBloqueio !== -1) {
        console.log();
        console.log(`Item duplicado na posição: ${posicaoBloqueio}`);
        console.log(PrimeiraConta);
        console.log(SegundaConta);
        console.log();
    }
    else {
        console.log(`Nenhum item duplicado`);
    }

    //MÉTODO splice()___Inserir itens e Remover item por índice____________________________________________________
    console.log('Sua nova tabela: ');
    const MinhasTarefas = ['Levantar requisitos', 'Criar um formulário', 'Tomar café', 'Ir embora o mais rápido possível', 'Tomar café'];
    MinhasTarefas.splice(1, 0, 'Estudar para prova');
    

    MinhasTarefas.splice(3, 1);
    console.table(MinhasTarefas);

    //Remover item por valor___________________________________________________
    function removePorValor(array, valor) {
        let indice = array.indexOf(valor);

        if(indice !== -1) {
            array.splice(indice, 1);
        }

        return array;
    }

    const RemoveMinhaTarefa = ['Levantar requisitos', 'Criar um formulário', 'Tomar café', 'Ir embora o mais rápido possível', 'Tomar café'];
    removePorValor(RemoveMinhaTarefa, 'Levantar requisitos');
    console.log();
    console.log('Sua tabela atualizada: ');
    console.table(RemoveMinhaTarefa);
//--------------------------------------------------------------------



// cd Exe3_aula3 
//node ArrayFuncaoNativaapp.js