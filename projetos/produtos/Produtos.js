import { BancoDeDados } from "./BancoDeDados.js";
const ul = document.getElementById("listaProdutos");
const produtos = BancoDeDados.buscarTodos();

if (produtos.length === 0) {
    ul.innerHTML = '<li>Nenhum produto cadastrado!</li>'
} else {
    produtos.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.toString();

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar"
        
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir"
        btnExcluir.onclick = () => {
            BancoDeDados.excluir(p.id);
            window.location.reload(); // recarrega os dados na tela, depois de excluir o id, retira o item da tela
        }
        

        li.append(btnEditar, btnExcluir);
        ul.appendChild(li);
    });
}