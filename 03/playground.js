    const MAIOR_IDADE = 18;
    const IDADE_PERMISSAO_TRABALHO = 14;

    let idade = 17;

    if (idade >= MAIOR_IDADE) {
        console.log("Entrada Permitida.");
    } else {
        console.log("Entrada Negada!");
    }


    // Exemplo else if
    let temperatura = Number(prompt("Digite a temperatura: "));

    if (temperatura < 10) {
        console.log("Está muito frio!");
    } else if (temperatura < 25) {
        console.log("Clima agradável");
    } else {
        console.log("Está muito quente!");
    }


    // Exemplo switch case

    let diaDaSemana = Number(prompt("Infomre o dia da semana de 1 a 7"));

    switch (diaDaSemana) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda");
            break;
        default:
            console.log("Número Inválido");
    }