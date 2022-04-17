export class Negociacoes {
    constructor() {
        this._lista = [];
    }
    get lista() {
        return this._lista;
    }
    adicionar(negociacao) {
        this._lista.push(negociacao);
    }
}
