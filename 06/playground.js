var prompt = require('prompt-sync')();

// declarando uma matriz

let vagas = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

console.log(vagas[0][3]);
console.log(vagas[2][1]);

let predio = [
    ["1S", "2S", "3S"],
    ["00", "01", "Atendimento"],
    ["A1", "A2", "A3"]
]
predio[1][2] = "RH"
console.log(predio)

// Adicionando uma nova linha na Matriz
predio.push(["B1", "B2", "B3"]);
console.log(predio)

let nome = prompt("Qual é o seu nome? ");

console.log("Seu nome é:", nome);