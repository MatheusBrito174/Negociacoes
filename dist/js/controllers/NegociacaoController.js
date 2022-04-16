import { Negociacao } from "../models/Negociacao.js";
export class NegociacaoController {
    constructor() {
        this._data = document.getElementById('data');
        this._quantidade = document.getElementById('quantidade');
        this._valor = document.getElementById('valor');
    }
    criar() {
        const negociacao = this.criarNegociacao();
        this.limparFormulario();
        return negociacao;
    }
    criarNegociacao() {
        const dataValores = this._data.value.split('-').map(valor => parseInt(valor));
        const data = new Date(dataValores[0], dataValores[1] - 1, dataValores[2]);
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this._data.value = null;
        this._quantidade.value = null;
        this._valor.value = null;
        this._data.focus();
    }
}
