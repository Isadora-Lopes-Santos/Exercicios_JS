const leia = require("readline-sync")

let salario
let abono
let NovoSalario

console.log("Digite o seu salário: " )
salario = leia.questionFloat()


console.log("\nDigite o valor do abono: ")
abono = leia.questionFloat()

NovoSalario = salario + abono
console.log("\nO seu Salário final será de: " + NovoSalario)