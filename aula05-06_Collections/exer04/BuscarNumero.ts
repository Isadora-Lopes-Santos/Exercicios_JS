import leia = require ("readline-sync")

const numeros: Set<number> = new Set<number>()

console.log("Digite 10 números inteiros (não repetidos):", "\n")

while (numeros.size < 10) {
  const num = leia.questionInt(`Numero ${numeros.size + 1}: `)

  if (numeros.has(num)) {
    console.log("Valor repetido! Digite outro número.")
  } else {
    numeros.add(num)
  }
}
console.clear()

console.log("\nList:")
console.log([...numeros].join(","))

const busca = leia.questionInt("\nDigite o numero que voce deseja encontrar: ")

console.clear()

console.log()
if (numeros.has(busca)) {
  console.log(`O numero ${busca} foi encontrado!`)
} else {
  console.log(`O numero ${busca} não foi encontrado!`)
}

