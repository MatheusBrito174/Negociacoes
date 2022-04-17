export function logarTempoDeExecucao(exibirEmSegundos = false) {
    let divisor = 1;
    let unidade = 'milissegundos';
    if (exibirEmSegundos) {
        divisor = 1000;
        unidade = 'segundos';
    }
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}.`);
        };
        return descriptor;
    };
}
