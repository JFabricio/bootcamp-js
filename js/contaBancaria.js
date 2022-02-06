class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (this._saldo < valor) {
            return 'Você não tem Saldo Suficiente';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}
class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'conta corrente';
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
        return this._cartaoCredito;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta poupança';
    }
}
class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação Invalida. Valor max $500'
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}