class Personagem {
    _nome;
    _forca;
    _pontosDeVida;
    _vivo;

    constructor(nome, pontosDeVida) {
        this._nome = nome;
        this._pontoDeVida = pontosDeVida;
        this._forca = 30;
        this._vivo = true;
    }

    tomarDano(valor) {
        if (valor >= 0) {
            this._pontosDeVida -= valor;
            console.log(`${this._nome} recebeu ${valor} de dano!`);
            if (this._pontosDeVida <= 0) {
                this.morrer();
            }
        } else {
            console.log("Valor inválido!");
        }
    }

    recuperarVida(valor) {
        if (valor > 0 && this._vivo) {
            this._pontosDeVida += valor;
            console.log(`${this._nome} recebeu ${valor} de vida!`);
        }
        console.log("Valor inválido!");
    }

    atacar(inimigo) {
        if (this._vivo) {
            console.log(`O ${this._nome} atacou!`);
            inimigo.tomarDano(this._forca);
        } else {
            console.log(this._nome, "Morto, não pode mais atacar");
        }
    }

    morrer() {
        this._vivo = false;
        console.log(`O ${this._nome} morreu!`);
    }
}

class Guerreiro extends Personagem {
    tomarDano(valor) {
        const escudo = valor - 5;
        // valor -= 5; super.tomarDano(valor)
        super.tomarDano(escudo);
    }
}

class Mago extends Personagem {
    atacar(inimigo) {
        this.tomarDano(5);
        if(this._pontosDeVida <= 0) {
            console.log("Vida insuficiente para conjurar um ataque!");
            this._pontosDeVida += 5;
            return;            
        }
        super.atacar(inimigo)
    }
}

class Arqueiro extends Personagem {
    _totalDeFlechas;
    constructor(nome, pontosDeVida, totalDeFlechas){
        super(nome, pontosDeVida);
        this._totalDeFlechas = totalDeFlechas
    }

    atacar(inimigo) {
        if(this._totalDeFlechas <= 0) {
            console.log('Você não pode atacar, pois suas flechas acabaram!')
            return;
        }
        console.log(`${this._nome} atacou ${inimigo._nome} com uma flechada!`)
        this._totalDeFlechas--;
        super.atacar(inimigo);
        console.log(this._totalDeFlechas)
    }

    // Ao atacar, gasta uma flecha, se o total for zero não pode atacar
}

let p1 = new Guerreiro("Marvin", 50);
let p2 = new Mago("Brigael", 40);
let p3 = new Arqueiro("Lucas", 70, 10);

p3.atacar(p2)