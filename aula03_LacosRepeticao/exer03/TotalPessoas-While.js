const leia = require("readline-sync")

let idade = 0
let menores = 0
let maiores = 0

while (true) {
    idade = leia.questionInt("Digite uma idade (negativa para sair): ")
    if (idade < 0) {
        break
    }
     if (idade < 21){
        menores++
    }
    else if (idade > 50) {
        maiores++
    }
}
console.log(`\nTotal de pessoas menores de 21 anos: ${menores} `)
console.log(`\nTotal de pessoas maiores de 50 anos: ${maiores}`)