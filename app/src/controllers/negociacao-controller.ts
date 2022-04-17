import { injetarDoDom } from "../decorators/injetar-do-dom.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    @injetarDoDom('#data')
    private readonly _data: HTMLInputElement;
    @injetarDoDom('#quantidade')
    private readonly _quantidade: HTMLInputElement;
    @injetarDoDom('#valor')
    private readonly _valor: HTMLInputElement;
    private readonly _negociacoes: Negociacoes;
    private readonly _negociacoesView: NegociacoesView;
    private readonly _mensagemView: MensagemView;

    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes-view');
        this._mensagemView = new MensagemView('#mensagem-view',);

        this._negociacoesView.update(this._negociacoes);
    }

    adicionar(): void {
        const negociacao = Negociacao.criarDe(this._data.value, this._quantidade.value, this._valor.value);

        if(!this.ehDiaUtil(negociacao.data)) {
            this._mensagemView.update('A data deve ser um dia entre segunda-feira e sexta-feira.');
            return;
        }

        this._negociacoes.adicionar(negociacao);

        this.limparFormulario();
        this.atualizarViews();
    }

    listarNegociacoes(): void {
        console.log(this._negociacoes.lista);
    }

    private limparFormulario(): void {
        this._data.value = '';
        this._quantidade.value = '';
        this._valor.value = '';

        this._data.focus();
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() !== DiasDaSemana.SABADO &&
               data.getDay() !== DiasDaSemana.DOMINGO;
    }

    @logarTempoDeExecucao(true)
    private atualizarViews():void {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada.');
    }
}