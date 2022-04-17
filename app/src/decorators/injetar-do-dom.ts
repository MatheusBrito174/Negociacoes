export function injetarDoDom(seletor: string) {
    let elementoCache: HTMLDivElement | null;

    return function(target: any, propertyKey: string) {
        const getter = {
            get: function() {
                if(!elementoCache) {
                    elementoCache = document.querySelector(seletor);
                }

                return elementoCache;
            }
        }

        Object.defineProperty(target, propertyKey, getter);
    }
}