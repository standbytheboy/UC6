// Menos que 12 -> Criança
// Entre 12 e 18 -> Adolescente
// Entre 18 e 60 -> Adulto
// Acima de 60 -> Idoso

let idade = Number(prompt("Infomre sua idade: "));

if (idade < 12) {
    console.log("Criança.")
}
else if (idade < 18) {
    console.log("Adolescente.")
}
else if (idade < 60) {
    console.log("Adulto.")
}
else {
    console.log("Idoso");
}