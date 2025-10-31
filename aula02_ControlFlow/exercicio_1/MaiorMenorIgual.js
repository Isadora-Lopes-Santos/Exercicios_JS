const leia = require('readline-sync')

let A,B,C,soma

console.log("Digite o valor de A: ")
A = leia.questionInt()

console.log("Digite o valor de B: ")
B = leia.questionInt()

console.log("Digite o valor de C: ")
C = leia.questionInt()

soma = A + B

if (soma > C){
    console.log("\n",A, "+", B, "=", soma, ">", C)
    console.log("A soma de A + B é maior que C")
}
else if(soma < C){
        console.log("\n",A, "+", B,"=", soma, "<", C)
        console.log("A soma de A + B é menor que C")
}
else if(soma == C){
        console.log("\n", A, "+", B,"=", soma, "=", C)
        console.log("A soma de A + B é igual a C")
}
else {
    console.log("Coloque um valor válido!")
}