export class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(dados) {
        this._elemento.innerHTML = this.template(dados);
    }
}
