import { Gerente } from "./Gerente.js";
import { OperadorCaixa } from "./OperadorDeCaixa.js";
import { Estagiario } from "./estagiario.js";

let bancoDeDados = [];

document.getElementById("btnCadastrar").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const matricula = document.getElementById("matricula").value;
    const ano = document.getElementById("anoAdmissao").value;
    const endereco = document.getElementById("endereco").value;
    const tipo = document.getElementById("tipoFuncionario").value;

    if (!nome || !matricula || !ano || !endereco || !tipo) {
        alert("Dados inválidos. Favor, preencher corretamente!");
        return;
    }

    let novoFunc;

    if (tipo === "gerente") {
        novoFunc = new Gerente(nome, matricula, ano, endereco);
    } else if (tipo === "operador") {
        novoFunc = new OperadorCaixa(nome, matricula, ano, endereco);
    } else if (tipo === "estagiario"){
        novoFunc = new Estagiario(nome, matricula, ano, endereco);
    }

    bancoDeDados.push(novoFunc);
    console.log(bancoDeDados);
    exibirResultadoEmTela();
});

function exibirResultadoEmTela() {
    // Busca um elemento na tela
    // Percorre o bancoDeDados, e lista esses elementos na tela
}