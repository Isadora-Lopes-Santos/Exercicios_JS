const leia = require("readline-sync")

let pares  = 0
let impares = 0

for (let contador = 1; contador <= 10; contador ++) { // ++ --> operador de incremento | contador = contador +1
    console.log("Digite o " + contador + "º número: ")
    numero = leia.questionInt()
     if (numero % 2 == 0){
        pares++
    }
    else if (numero % 2 != 0) {
        impares++
    }
}
console.log(`\nTotal de números pares: ${pares}`)
console.log(`\nTotal de números ímpares: ${impares}`)
