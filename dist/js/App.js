import { NegociacaoController } from './controllers/NegociacaoController.js';
const controller = new NegociacaoController();
let negociacao;
document.querySelector('.form').addEventListener('submit', event => {
    event.preventDefault();
    negociacao = controller.criar();
    console.log(negociacao);
});
