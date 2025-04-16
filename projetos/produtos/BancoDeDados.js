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

    static buscarPorId(id) {
        const produtoJson = localStorage.getItem(id); // pega o id do produto no local storage
        const dados = JSON.parse(produtoJson); // converte o produto em json
        return Produto.fromJSON(dados); // usa a função fromJSON para transformar o produto em um objeto do tipo produto
    }

    // UPDATE
    static atualizar(produtoAtualizado) {
        localStorage.setItem(produtoAtualizado.id, JSON.stringify({
            id: produtoAtualizado.id,
            nome: produtoAtualizado.nome,
            preco: produtoAtualizado.preco,
            peso: produtoAtualizado.peso,
            validade: produtoAtualizado.validade
        }));
    }

    //DELETE
    static excluir(id) {
        localStorage.removeItem(id);
    }
}