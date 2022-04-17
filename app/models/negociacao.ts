export class Negociacao {
    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ) {}

    public static criarDe(dataStr: string, quantidadeStr: string, valorStr: string): Negociacao {
        const dataValores = dataStr.split('-').map(val => parseInt(val));

        const data = new Date(dataValores[0], dataValores[1] - 1, dataValores[2]);
        const quantidade = parseInt(quantidadeStr);
        const valor = parseFloat(valorStr);

        return new Negociacao(data, quantidade, valor);
    }

    get data(): Date {
        return new Date(this._data.getTime());
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}