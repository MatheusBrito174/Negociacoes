import { NegociacaoController } from './controllers/NegociacaoController.js';
const controller = new NegociacaoController();
document.querySelector('.form').addEventListener('submit', event => {
    event.preventDefault();
    controller.adicionar();
    controller.listarNegociacoes();
});
