let estacionamento = [
    ["Vazio", "Vazio", "Vazio",],
    ["Vazio", "Vazio", "Vazio",],
    ["Vazio", "Vazio", "Vazio",]
]

function estacionarCarro(linha, coluna, placa) {
    if (estacionamento[linha][coluna] === "Vazio") {
        estacionamento[linha][coluna] = placa;
    } else {
        console.log(`Essa vaga está ocupada! Veículo ${estacionamento[linha][coluna]}`)
    }
}

function removerCarro(linha, coluna) {
    if (estacionamento[linha][coluna] !== "Vazio") {
        estacionamento[linha][coluna] = "Vazio";
    }

}

function exibirEstacionamento() {
    console.log(estacionamento);
}

estacionarCarro(1, 2, "AXD1007")
estacionarCarro(1, 1, "AXF1791")
estacionarCarro(1, 2, "AXD9021")

exibirEstacionamento();
removerCarro(1, 2);
exibirEstacionamento();