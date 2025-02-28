let elementosVagas = document.querySelectorAll(".vaga");
let infoElementos = document.querySelectorAll(".resumo div");
let vagas = new Array(10).fill(null);
let totalHoras = new Array(10).fill(0);
let resultadoNaTela = document.getElementById("resultado");

elementosVagas.forEach((vaga, i) => {
    vaga.addEventListener("click", () => gerenciarVaga(i));
});

function gerenciarVaga(numeroDaVaga) {
    let hora = parseInt(prompt("Informe a hora (somente número inteiro):"));

    if(isNaN(hora) || hora < 0 || hora > 23) {
        alert("Hora inválida");
        return;
    }

    if(vagas[numeroDaVaga] === null) {
        vagas[numeroDaVaga] = hora;
        elementosVagas[numeroDaVaga].classList.add("ocupado");
    } else {
        if (hora <= vagas[numeroDaVaga]) {
            alert("a hora de saída é inválida!");
            return;
        }
        totalHoras[numeroDaVaga] += hora - vagas[numeroDaVaga];
        vagas[numeroDaVaga] = hora;
        elementosVagas[numeroDaVaga].classList.remove("ocupado");
    }
    attInfo();
}

function attInfo() {
    for(let i = 0; i < 10; i++) {
        infoElementos[i].innerHTML = `Vaga ${i + 1}: ${totalHoras[i]}h`
    }
}
