import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
    protected template(dados: Negociacoes): string {
        return `
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>

                <tbody>
                    ${dados.lista.map(negociacao => `
                        <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    private formatarData(data: Date) {
        return Intl.DateTimeFormat('pt-BR').format(data);
    }
}