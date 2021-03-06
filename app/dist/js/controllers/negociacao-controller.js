var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { injetarDoDom } from "../decorators/injetar-do-dom.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes-view');
        this._mensagemView = new MensagemView('#mensagem-view');
        this._negociacoesService = new NegociacoesService();
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
    importarNegociacoesDoDia() {
        this._negociacoesService.buscarNegociacoesDoDia()
            .then(negociacoes => {
            negociacoes.lista.forEach(negociacao => this._negociacoes.adicionar(negociacao));
            this._negociacoesView.update(this._negociacoes);
            this._mensagemView.update('Negocia????es do dia importadas.');
        });
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
        this._mensagemView.update('Negocia????o adicionada.');
    }
}
__decorate([
    injetarDoDom('#data')
], NegociacaoController.prototype, "_data", void 0);
__decorate([
    injetarDoDom('#quantidade')
], NegociacaoController.prototype, "_quantidade", void 0);
__decorate([
    injetarDoDom('#valor')
], NegociacaoController.prototype, "_valor", void 0);
__decorate([
    logarTempoDeExecucao(true)
], NegociacaoController.prototype, "atualizarViews", null);
