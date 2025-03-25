let pessoas = [
    { nome: "João", nascimento: "1988-03-15", tipoSanguineo: "AB-", cpf: "45678901233", telefone: "966666666" },
    { nome: "Ana", nascimento: "1990-05-12", tipoSanguineo: "O+", cpf: "12345678900", telefone: "999999999" },
    { nome: "Carlos", nascimento: "1985-07-23", tipoSanguineo: "A-", cpf: "23456789011", telefone: "988888888" },
    { nome: "Pedro", nascimento: "1993-12-05", tipoSanguineo: "A+", cpf: "67890123455", telefone: "944444444" },
    { nome: "Maria", nascimento: "1995-08-19", tipoSanguineo: "O-", cpf: "56789012344", telefone: "955555555" },
    { nome: "Fernanda", nascimento: "1992-10-30", tipoSanguineo: "B+", cpf: "34567890122", telefone: "977777777" }
];

export function bubbleSort(array) {

    for (let limite = array.length - 1; limite > 0; limite--) { // diminui o tamanho/comprimento do array para -1, pois assim que o código funciona, o maior número vai sempre para o índice final
        let verificacaoCompleta = true;
        for (let i = 0; i < limite; i++) {
            if (array[i].cpf > array[i + 1].cpf) { // i é o índice 0, e i + 1 pega o próximo número da lista
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                verificacaoCompleta = false;
            }
        }
        if (verificacaoCompleta) {
            break; // faz o bubble sort parar de verificar se já estiver organizado
        }
    }
    return array;
}

export function buscaBinaria(array, valor) {
    let inicio = 0;
    let final = array.length - 1;

    while (inicio <= final) {
        let meio = Math.floor((inicio + final) / 2);

        if (array[meio].nome === valor) {
            return meio;
        } else if (array[meio].nome < valor) {
            inicio = meio + 1;
        } else {
            final = meio - 1;
        }
    }
    return -1;
}

// console.log(bubbleSort(pessoas));
// console.log(buscaBinaria(pessoas, "João"))