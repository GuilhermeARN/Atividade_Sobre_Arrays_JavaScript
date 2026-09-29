class MeuArray {
    //propriedade
    #itens = []
    #tamanho = 0;

    //Métodos criados por mim

    //----------Método adicionar----------------
    adicionar(elemento) {

        this.#itens[this.#tamanho] = elemento;

        this.#tamanho++;
    }

    //----------Método tamanhoArray----------------
    tamanhoArray() {
        return this.#tamanho;
    } 

    //----------Método toString----------------
    toString = () => console.table(this.#itens);


    //obterElemento(indice)
    obterElemento(indice) {
        if (indice < 0 || indice >= this.#tamanho){
            return undefined;
        }

        return this.#itens[indice];
    }


    //----------obterIndice(elemento)--------
    obterIndice(elemento) {
        let indice_encontrado = -1;

        for(let i = 0; i <= this.#tamanho; i++){
            if(this.#itens[i] === elemento) {
                indice_encontrado = i;
                break;
            }
        }
        return indice_encontrado;
    }

    remover() {
        //Se o array estiver vazio não remove nada 
        if (this.#tamanho === 0) {
            return undefined;
        }

        //Armazena o último item
        const ultimoItem = this.#itens[this.#tamanho - 1];

        //Remove o último item do array
        delete this.#itens[this.#tamanho - 1];

        this.#tamanho--;

        return ultimoItem;
    }
}

module.exports = MeuArray; 