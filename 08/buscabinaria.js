var prompt = require('prompt-sync')();
let numeros = [10, 20, 30, 50, 70, 85];

// Busca Nativa em JS
// console.log(numeros.indexOf(9));

function buscaBinaria(array, valor) {
    let inicio = 0;
    let final = array.length - 1;

    while (inicio <= final) {
        let meio = Math.floor((inicio + final) / 2);

        if (array[meio] === valor) {
            return meio;
        } else if (array[meio] < valor) {
            inicio = meio + 1;
        } else {
            final = meio - 1;
        }
    }
    return -1;
}

console.log(buscaBinaria(numeros, 10)); 