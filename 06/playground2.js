var prompt = require('prompt-sync')();

let alunos = [
    'Aecio',
    'Bernardo',
    'Cecilia'
]

let cadeiras = [
    ["B2", "B4", "B6", "B8"],
    ["D2", "D4", "D6", "D8"],
    ["E2", "E4", "E6", "E8"],
];

// console.log(alunos);
// for (let i = 0; i < alunos.length; i++) {
//     console.log(`Aluno ${i + 1}: ${alunos[i]}`)
// }

// percorrer matriz
for (let i = 0; i < cadeiras.length; i++) {
    for (let j = 0; j < cadeiras[i].length; j++) {
        console.log(`Posição [${i}] [${j}]: ${cadeiras[i][j]}`)
    }
    console.log("\n")
}