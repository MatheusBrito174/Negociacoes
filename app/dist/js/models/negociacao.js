export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    static criarDe(dataStr, quantidadeStr, valorStr) {
        const dataValores = dataStr.split('-').map(val => parseInt(val));
        const data = new Date(dataValores[0], dataValores[1] - 1, dataValores[2]);
        const quantidade = parseInt(quantidadeStr);
        const valor = parseFloat(valorStr);
        return new Negociacao(data, quantidade, valor);
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
