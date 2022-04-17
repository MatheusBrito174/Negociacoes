export function injetarDoDom(seletor) {
    let elementoCache;
    return function (target, propertyKey) {
        const getter = {
            get: function () {
                if (!elementoCache) {
                    elementoCache = document.querySelector(seletor);
                }
                return elementoCache;
            }
        };
        Object.defineProperty(target, propertyKey, getter);
    };
}
