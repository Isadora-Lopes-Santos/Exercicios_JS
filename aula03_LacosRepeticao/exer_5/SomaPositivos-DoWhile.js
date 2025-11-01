const leia = require("readline-sync")

let soma = 0
let numero

do {
    console.log("Digite um número:")
    numero = leia.questionInt()
    if (numero > 0) {
        soma += numero
    }
} while (numero != 0)

console.log("\nA soma dos números positivos é: " + soma)
