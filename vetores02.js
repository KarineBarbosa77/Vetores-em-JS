//          Métodos Filter
const filterArray = ["guilherme", "amanda", "Rogerio", "Gabriel", "Renata"]
console.log(filterArray);

const novoArray = filterArray.filter((qualquercoisa) => {
    return qualquercoisa == "amada" || qualquercoisa == "guilherme"
})

console.log(novoArray);