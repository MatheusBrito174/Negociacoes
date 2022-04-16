import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
    private readonly _lista: Negociacao[] = [];

    get lista(): readonly Negociacao[] {
        return this._lista;
    }

    adicionar(negociacao: Negociacao): void {
        this._lista.push(negociacao);
    }
}