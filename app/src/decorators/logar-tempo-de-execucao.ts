export function logarTempoDeExecucao(exibirEmSegundos: boolean = false) {
    let divisor = 1;
    let unidade = 'milissegundos';

    if(exibirEmSegundos) {
        divisor = 1000;
        unidade = 'segundos';
    }

    /**
     * taget:
     *      se decorator aplicado em método estático => contrutor da classe
     *      se decorator aplicado em método não estático => protoype da classe
     * propertyKey:
     *      nome do membro onde o decorator foi aplicado
     * descriptor:
     *      se decorator aplicado em função => referência a essa função (no atributo value)
     *      se decorator aplicado em campo => não se aplcia
     */
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const t1 = performance.now();

            metodoOriginal.apply(this, args);

            const t2 = performance.now();

            console.log(`Método ${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}.`);
        };

        return descriptor;
    }
}