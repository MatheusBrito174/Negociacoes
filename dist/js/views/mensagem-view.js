import { View } from "./view.js";
export class MensagemView extends View {
    template(dados) {
        return `
            <div class="alert alert-success" role="alert">
                ${dados}
            </div>
        `;
    }
}
