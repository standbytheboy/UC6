/*
// while
let estoque = 10;

while(estoque > 0) {
    let qtdCompra = Number(prompt(`Temos ${estoque} pães. Quantos deseja comprar?`));

    if (qtdCompra > estoque) {
        console.log("Quantidade indisponível.");
    } else {
        estoque -= qtdCompra;
        console.log(`Compra realizada! Restam ${estoque} pães.`)
    }
}

console.log("Estoque zerado. Padaria Fechada!");
*/

/*
// do while
let totalCompra = 0;
let preco;

do {
    preco = Number(prompt("Digite o valor do produto (ou 0 para finalizar)"));

    if (preco > 0) {
        totalCompra += preco;
        console.log(`Total atual da compra: ${totalCompra}`);
    }
} while (preco !== 0);

console.log(`Valor final da compra: R$ ${totalCompra}`);
*/

/*
// for
let faturamento = [1200, 1350, 1100, 1600, 1750, 200];

for (let dia = 0; dia < faturamento.length; dia++) {
    console.log(`Dia ${dia + 1}: R$ ${faturamento[dia]}`)       
}
*/

// Uso do break e continue
// BREAK
let mesasDisponiveis = 5;

while (true) {
    let qtdReserva = Number(prompt("Quantas mesas deseja reservar?"));

    if (qtdReserva > mesasDisponiveis) {
        console.log("Reserva indisponível.");
    } else {
        console.log(`Reserva confirmada para ${qtdReserva} mesas`);
        mesasDisponiveis -= qtdReserva;
        break; // Sai do loop ao confirmar a reserva
    }
}

// CONTINUE
let pagamentos = [200, -50, 300, 0, 450];

for (let i = 0; i < pagamentos.length; i++) {
    if (pagamentos[i] <= 0) {
        console.log(`Pagamento ${i + 1} inválido. Pulando...`);
        continue;
    }

    console.log(`Pagamentos ${i + 1} registrado. R$ ${pagamentos[i]}`);
}
