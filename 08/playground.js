var prompt = require('prompt-sync')();

let clientes = ["Ana", "Carlos", "Gabriel", "Joao", "Maria"];
let nomeInformado = prompt("Informe o nome do cliente que deseja buscar: ")

// ----------------------------------------------------------------------------------------------------------------------------------------
// BUSCA LINEAR COM FUNÇÃO NATIVA (FOREACH)
function buscarCliente(nome) {
    let encontrado = false;

    clientes.forEach((cliente, i) => {
        if(cliente === nome) {
            console.log('Cliente encontradao na posição ' + i);
            encontrado = true;
        }
    });

    if (!encontrado) {
        console.log("Cliente não encontrado.");
    }
}
console.log(buscarCliente(nomeInformado));

// ----------------------------------------------------------------------------------------------------------------------------------------
// Busca com função nativa (IndexOf) - esse caso não serve caso eu queira encontrar mais de um nome, por exemplo
console.log(clientes.indexOf(nomeInformado));


// ----------------------------------------------------------------------------------------------------------------------------------------
// Busca linear com estrutura de dados
function buscaLinear(array, valor) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === valor) {
            return i;
        }
    }
    return -1;
}

console.log(buscaLinear(clientes, nomeInformado))