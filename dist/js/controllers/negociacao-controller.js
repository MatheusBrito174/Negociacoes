import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._data = document.getElementById('data');
        this._quantidade = document.getElementById('quantidade');
        this._valor = document.getElementById('valor');
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes-view');
        this.atualizarViews();
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this._negociacoes.adicionar(negociacao);
        this.limparFormulario();
        this.atualizarViews();
    }
    listarNegociacoes() {
        console.log(this._negociacoes.lista);
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
    atualizarViews() {
        this._negociacoesView.update(this._negociacoes);
    }
}
