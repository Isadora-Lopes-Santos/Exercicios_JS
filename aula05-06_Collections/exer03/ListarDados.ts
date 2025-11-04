import leia = require ("readline-sync")

const numeros: Set<number> = new Set<number>()

console.log("Digite 10 números inteiros (não repetidos): ")

while (numeros.size < 10) {
  const entrada = leia.questionInt(`${numeros.size + 1}: `)

  if (numeros.has(entrada)) {
    console.log("Valor repetido! Digite outro numero...")

  } else {
    numeros.add(entrada)
  }
}

console.clear()

// Exibe os números na ordem em que foram adicionados
console.log("Dados do Set:")
numeros.forEach(num => console.log(num))


