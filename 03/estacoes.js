let estacao = Number(prompt("Informe o código da estação de 1 a 4"));

switch (estacao) {
    case 1:
        console.log("Primavera");
        break;
    case 2:
        console.log("Verão");
        break;
    case 3:
        console.log("Outono");
        break;
    case 4:
        console.log("Inverno");
        break;
    default:
        console.log("Estação inválida");
        break;
}