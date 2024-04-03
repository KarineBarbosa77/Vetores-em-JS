        //Indice =   0        1      2     3
const spliceArray = ['jan', 'fev', 'abr','jun']
console.log(spliceArray)

spliceArray.splice(2,0, 'mar')
spliceArray.splice(4,0, 'maio')

console.log(spliceArray);

//Método Splice permite selecionar um indice e remover e adicionar valores(substituição)