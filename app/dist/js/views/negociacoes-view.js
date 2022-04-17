import { View } from "./view.js";
export class NegociacoesView extends View {
    template(dados) {
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
    formatarData(data) {
        return Intl.DateTimeFormat('pt-BR').format(data);
    }
}
