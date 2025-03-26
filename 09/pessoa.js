class Pessoa {
    altura = 0;
    peso = 0;
    anoNascimento = 0;
    nome = "";
    vivo = true;

    constructor(altura, peso, anoNascimento, nome) {
        this.altura = altura;
        this.peso = peso;
        this.anoNascimento = anoNascimento;
        this.nome = nome;
        this.vivo = true;
    }
    
    andar() {
        if(this.vivo == true) {
            console.log(`${this.nome} está andando!`);
        } else {
            console.log("Não pode mais andar.")
        }
    }

    pular() {
        console.log(`${this.nome} está pulando!`)
    }

    mostrarIdade() {
        console.log(`A idade de ${this.nome} é de ${2025 - this.anoNascimento} anos!`)
    }

    morrer() {
        this.vivo = false;
    }
}

let pessoa = new Pessoa (1.65, 59, 2005, "Lucas")
console.log(pessoa);
pessoa.andar();
pessoa.pular();
pessoa.mostrarIdade();