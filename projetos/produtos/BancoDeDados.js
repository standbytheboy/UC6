import { Produto } from "./Produto.js"

export class BancoDeDados {
    // CREATE
    static salvar(produto) {
        localStorage.setItem(produto.id, JSON.stringify({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            peso: produto.peso,
            validade: produto.validade
        }));
    }

    // READ
    static buscarTodos() {
        const produtosCadastrados = [];
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);

            if(!isNaN(parseInt(chave))) {
                const dados = JSON.parse(localStorage.getItem(chave));
                produtosCadastrados.push(Produto.fromJSON(dados))
            }
        }
        return produtosCadastrados.sort((a, b) => a.id - b.id);
    }

    buscarPorId(id) {

    }

    // UPDATE
    atualizar(produtoAtualizado) {

    }

    //DELETE
    excluir(id) {

    }
}