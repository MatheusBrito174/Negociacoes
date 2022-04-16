import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private readonly _data: HTMLInputElement;
    private readonly _quantidade: HTMLInputElement;
    private readonly _valor: HTMLInputElement;
    private readonly _negociacoes: Negociacoes;
    private readonly _negociacoesView: NegociacoesView;
    private readonly _mensagemView: MensagemView;

    constructor() {
        this._data = document.getElementById('data') as HTMLInputElement;
        this._quantidade = document.getElementById('quantidade') as HTMLInputElement;
        this._valor = document.getElementById('valor') as HTMLInputElement;

        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes-view');
        this._mensagemView = new MensagemView('#mensagem-view',);

        this._negociacoesView.update(this._negociacoes);
    }

    adicionar(): void {
        const negociacao = this.criarNegociacao();

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

    private criarNegociacao(): Negociacao {
        const dataValores = this._data.value.split('-').map(valor => parseInt(valor));

        const data = new Date(dataValores[0], dataValores[1] - 1, dataValores[2]);
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);

        return new Negociacao(data, quantidade, valor);
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

    private atualizarViews():void {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada.');
    }
}