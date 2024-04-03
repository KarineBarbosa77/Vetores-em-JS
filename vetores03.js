//              Método Map
// O map não modifica o Array original, somente a função de calback podera fazer isso, ou seja, ela criara um novo array modificado
// Indice = 0, 1, 2, 3, 4

constMap = [1, 2, 3, 4, 5];

const arrayModificado = constMap.map((numero, indice) => {
    return numero * indice;
})

console.log(arrayModificado);