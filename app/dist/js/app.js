import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionar();
        controller.listarNegociacoes();
    });
}
else {
    alert('Não foi possível iniciar aplicação. Verifique se o elemento com classe \'form\' existe.');
}
