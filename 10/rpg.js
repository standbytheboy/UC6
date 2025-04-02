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
        } else {
            console.log("Valor inválido!");
        }
    }

    atacar(inimigo) {
        if(this._vivo) {
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
        super.tomarDano(escudo);
    }
}

class Mago extends Personagem {
    atacar(inimigo) {
        this.tomarDano(5);
        super.atacar(inimigo)
    }
}

let p1 = new Guerreiro("Marvin", 50);
let p2 = new Mago("Brigael", 70);

p2.atacar(p1)
