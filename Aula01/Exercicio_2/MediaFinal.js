const leia = require("readline-sync")

let Notas = Number // Declarar qual tipo de dado entrará 
let Media

console.log("Digite a 1º nota: ")
n1 = leia.questionFloat()
console.log("Digite a 2º nota: ")
n2 = leia.questionFloat()
console.log("Digite a 3º nota: ")
n3 = leia.questionFloat()
console.log("Digite a 4º nota: ")
n4 = leia.questionFloat()

Media = (n1+n2+n3+n4)/4

console.log("\nA média é: ", Media)