export abstract class View<T> {
    private _elemento: HTMLElement;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(dados: T): void {
        this._elemento.innerHTML = this.template(dados);
    }

    protected abstract template(dados: T): string;
}