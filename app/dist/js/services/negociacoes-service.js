import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacoesService {
    buscarNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then((dados) => dados.json())
            .then((dados) => dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)))
            .then((negociacoes) => new Negociacoes(negociacoes));
    }
}
