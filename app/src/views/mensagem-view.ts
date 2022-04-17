import { View } from "./view.js";

export class MensagemView extends View<string>{
    protected template(dados: string): string {
        return `
            <div class="alert alert-success" role="alert">
                ${dados}
            </div>
        `;
    }
}