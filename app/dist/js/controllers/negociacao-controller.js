import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._data = document.getElementById('data');
        this._quantidade = document.getElementById('quantidade');
        this._valor = document.getElementById('valor');
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes-view');
        this._mensagemView = new MensagemView('#mensagem-view');
        this._negociacoesView.update(this._negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.criarDe(this._data.value, this._quantidade.value, this._valor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this._mensagemView.update('A data deve ser um dia entre segunda-feira e sexta-feira.');
            return;
        }
        this._negociacoes.adicionar(negociacao);
        this.limparFormulario();
        this.atualizarViews();
    }
    listarNegociacoes() {
        console.log(this._negociacoes.lista);
    }
    limparFormulario() {
        this._data.value = '';
        this._quantidade.value = '';
        this._valor.value = '';
        this._data.focus();
    }
    ehDiaUtil(data) {
        return data.getDay() !== DiasDaSemana.SABADO &&
            data.getDay() !== DiasDaSemana.DOMINGO;
    }
    atualizarViews() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada.');
    }
}
