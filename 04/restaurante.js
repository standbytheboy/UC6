let carnes = 7;
let arroz = 12;
let feijao = 8;

while (carnes > 0 && arroz > 0 && feijao > 0) {
    let opcao = Number(prompt("Escolha a marmita: \n 1-Completa \n 2-Carnes"));

    switch (opcao) {
        case 1:
            carnes--, arroz--, feijao--;
            break;
        case 2:
            carnes -= 2;
            break;
        default:
            alert("Número inválido");
            break;
    }
    console.log(carnes, arroz, feijao);
}