import { NegociacoesDoDia } from "../interfaces/negociacoes-do-dia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesService {
    public buscarNegociacoesDoDia(): Promise<Negociacoes> {
        return fetch('http://localhost:8080/dados')
            .then((dados: Response) => dados.json())
            .then((dados: NegociacoesDoDia[]) => dados.map(
                dado => new Negociacao(new Date(), dado.vezes, dado.montante)
            ))
            .then((negociacoes: Negociacao[]) => new Negociacoes(negociacoes));
    }
}