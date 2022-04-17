import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    private _elemento: HTMLElement;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor) as HTMLElement;
    }

    @logarTempoDeExecucao()
    update(dados: T): void {
        this._elemento.innerHTML = this.template(dados);
    }

    protected abstract template(dados: T): string;
}