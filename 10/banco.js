class Conta {
    _saldo; // a hashtag transforma o atributo em privado
    _titular;

    constructor(titular, saldoInicial) {
        this._titular = titular;
        this._saldo = saldoInicial;
    }

    getSaldo() {
        return `Saldo de ${this._titular}: R$ ${this._saldo}`
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito na conta de ${this._titular} feito com sucesso! Novo saldo: R$ ${this._saldo}`);
            return true;
        }
        console.log("Valor inválido para depósito.")
        return false;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque na conta de ${this._titular} feito com sucesso! Novo saldo: R$ ${this._saldo}`);
            return true;
        }
        console.log("Valor inválido para saque.")
        return false;
    }

    transferir(valor, contaDestino) {
        if (this.sacar(valor)) {
            console.log(`Transferência iniciada.`)
            contaDestino.depositar(valor);
            console.log(`Transferência feita com sucesso.`);
            return true;
        }
        console.log(`Transferência cancelada.`);
        return false;
    }

}

class ContaPoupanca extends Conta {
    calcularRendimento() {
        this._saldo += this._saldo * 0.005
    }
}

class ContaCorrente extends Conta {
    sacar(valor) {
        const taxa = valor * 0.02;
        const novoValorTotal = valor + taxa;
        super.sacar(novoValorTotal);
    }
}

let conta1 = new ContaPoupanca("Lucas", 7600);
let conta2 = new ContaCorrente("Clodoaldo", 2100);
conta2.sacar(1200)