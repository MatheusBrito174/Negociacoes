import { Negociacao } from "../models/Negociacao.js";

export class NegociacaoController {
    private _data: HTMLInputElement;
    private _quantidade: HTMLInputElement;
    private _valor: HTMLInputElement;

    constructor() {
        this._data = document.getElementById('data') as HTMLInputElement;
        this._quantidade = document.getElementById('quantidade') as HTMLInputElement;
        this._valor = document.getElementById('valor') as HTMLInputElement;
    }

    criar(): Negociacao {
        const negociacao = this.criarNegociacao();
        this.limparFormulario();

        return negociacao;
    }

    private criarNegociacao(): Negociacao {
        const dataValores = this._data.value.split('-').map(valor => parseInt(valor));

        const data = new Date(dataValores[0], dataValores[1] - 1, dataValores[2]);
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);

        return new Negociacao(data, quantidade, valor);
    }

    private limparFormulario(): void {
        this._data.value = null;
        this._quantidade.value = null;
        this._valor.value = null;

        this._data.focus();
    }
}