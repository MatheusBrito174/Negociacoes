import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private readonly _lista: Negociacao[];

    constructor(negociacoes: Negociacao[] = []) {
        this._lista = [...negociacoes];
    }

    get lista(): readonly Negociacao[] {
        return this._lista;
    }

    adicionar(negociacao: Negociacao): void {
        this._lista.push(negociacao);
    }
}