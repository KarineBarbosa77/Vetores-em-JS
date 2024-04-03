//Array são como caixas com outras caixas que, podem ser acessadas atraves de seu indice entre colchetes []. O primeiroi indice sempre começa do 0, portanto um array de 4 posicções terá o indice de 0 à 3

//O array é heterogenio, ou seja, podemos colocar qualquer valor dentro dele, ou seja, tipos de dados diferentes. Int, String, double, boolean...

//Realizando a criação de um Array:

//indice = 0

/*
const arr = ["Girafa", "camaleão", 'zebra', 3]
// 11
arr[10] = "Leão"
//arr.push("qualquer coisa");
//arr.push("Girafa")

console.log(`
    ${arr}
`);  
*/

const pushArray = ["Leão", "tartaruga", 'papagaio']
console.log(pushArray)

pushArray[0] = 'Borboleta'

pushArray.push('escorpião')
console.log(pushArray);

pushArray.push('dragão')
console.log(pushArray);

