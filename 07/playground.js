function saudacao(nome) {
    console.log("Olá " + nome + ", boa noite!");
}
saudacao("Aecio");

function soma(a, b) {
    return a + b;
}
console.log(soma(2,1));

// Escopo local de função
function teste() {
    let mensagem = "Olá";
    console.log(mensagem);
}
teste();

// Arrow Function
function dobro(x) {
    return x * 2;
}

let dobroAnonimo = function(x) {
    return x * 2;
}

let dobroArrow = (x) => {
    return x * 2;
}

let dobroSimples = x => x * 2;

console.log(dobro(2));
console.log(dobroAnonimo(2));
console.log(dobroArrow(2));
console.log(dobroSimples(2));
