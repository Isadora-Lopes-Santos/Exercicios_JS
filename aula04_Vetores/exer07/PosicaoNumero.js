const leia = require("readline-sync")

let vetor = new Array()
let numeroProcurado
let posicao = -1

// Leitura dos 10 números do vetor
for (let i = 0; i < 10; i++) {
        console.log(`Digite o ${i + 1}º número:`)
        valor = leia.questionInt()
        vetor.push(valor)
}
// Usuário informa o número que quer procurar
console.log("Digite o número que você deseja encontrar: ")
numeroProcurado = leia.questionInt()

// Busca do número no vetor
for (let i = 0; i < vetor.length; i++) {
        if  (vetor[i] == numeroProcurado) {
            posicao = i
            break // sai do loop, pois já encontrou
        }
}
// Exibe o resultado
if (posicao != -1) {
        console.log(`\nO número ${numeroProcurado} está localizado na posição: ${posicao}`)
} else {
    console.log(`\nO número ${numeroProcurado} não foi encontrado!`)
}
