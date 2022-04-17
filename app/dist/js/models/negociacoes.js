export class Negociacoes {
    constructor(negociacoes = []) {
        this._lista = [...negociacoes];
    }
    get lista() {
        return this._lista;
    }
    adicionar(negociacao) {
        this._lista.push(negociacao);
    }
}
