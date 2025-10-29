const leia = require("readline-sync")

let salario
let abono
let NovoSalario

console.log("Digite o seu salário: ")
salario = leia.questionFloat()

console.log("Digite o seu salário: ")
abono = leia.questionFloat()

NovoSalario = salario + abono

console.log("O seu salário será: ", NovoSalario)
