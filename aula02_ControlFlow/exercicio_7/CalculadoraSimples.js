const leia = require('readline-sync')

let numero1, numero2
let opcao

        console.log("Digite o 1º número: ")
        numero1 = leia.questionFloat()
        console.log("Digite o 2º número: ")
        numero2 = leia.questionFloat()
        console.log("Operador (1-4): ")
        opcao = leia.questionFloat()

switch (opcao) {
    case 1:
        calculo = numero1 + numero2
        console.log(numero1 + " + " + numero2 + " = " + calculo)
        break
//Saída--> numero1 + numero2 = calculo
    case 2:
        calculo = numero1 - numero2
        console.log(numero1 + " - " + numero2 + " = " + calculo)
        break
//Saída--> numero1 - numero2 = calculo
    case 3:
        calculo = numero1 * numero2
        console.log(numero1 + " * " + numero2 + " = " + calculo)
        break
//Saída--> numero1 * numero2 = calculo
    case 4:
        calculo = numero1 / numero2
        console.log(numero1 + " / " + numero2 + " = " + calculo)
        break
//Saída--> numero1 / numero2 = calculo 
    default:
        console.log("Operação inválida!")
}