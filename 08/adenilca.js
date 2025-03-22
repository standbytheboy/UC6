let alunos = [
    { nome: 'Carlos', altura: 1.75 },
    { nome: 'Gabriel', altura: 1.50 },
    { nome: 'Lucas', altura: 1.65 },
    { nome: 'Gustavo', altura: 1.67 },
    { nome: 'Clodoaldo', altura: 1.70 }
];

console.log(alunos);

function adenilcaSort(array) {
    let i = 0;

    while(i < array.length - 1) {
        let ref = i;

        if(array[i].altura > array[i + 1].altura) {
            [array[i] , array[i + 1]] = [array[i + 1] , array[i]];
        } else {
            ref = i + 1; // pega o próximo da lista para ser comparado com o atual
        }
        i = ref;
    }
    return array;
}

console.log(adenilcaSort(alunos));