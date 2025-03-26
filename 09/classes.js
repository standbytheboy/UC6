class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    marca = "";
    modelo = "";
    ano = 0;

    ligar() {
        this.ligado = true;
        console.log(`Seu ${this.marca} ${this.modelo} foi ligado!`)
    };
}

// criando instâncias de objeto de forma simples
let carro1 = new Carro ();
carro1.marca = "Honda";
carro1.modelo = "Civic";
carro1.ano = 2024;
console.log(carro1);
carro1.ligar();

// criando instâncias de objetos com o constructor:
let carro2 = new Carro ("Fiat", "Uno", 2005);
console.log(carro2);
carro2.ligar();

let carro3 = new Carro ("Ford", "Mustang GT", 1965);
console.log(carro3);
carro3.ligar();