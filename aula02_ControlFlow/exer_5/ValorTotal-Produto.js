const leia = require('readline-sync')

let opcao
let quantidade, calculo

console.log("Código do produto (1 a 6): ")
opcao = leia.questionInt()

switch (opcao) {
    case 1:
        console.log("Quantidade de itens: ")
        quantidade = leia.questionInt()
        calculo = quantidade * 10
        console.clear()
        console.log("\nProduto: Cachorro Quente" + "\n" + "\nValor total: R$" + calculo )
        break
//Saída--> Produto: Cachorro Quente ++ Valor total: quantidade + R$ 10.00 
    case 2:
        console.log("Quantidade de itens: ")
        quantidade = leia.questionInt()
        calculo = quantidade * 15
        console.clear()
        console.log("\nProduto: X-Salada" + "\n" + "\nValor total: R$" + calculo )
        break
//Saída--> Produto: X-Salada ++ Valor total: quantidade + R$ 15.00
    case 3:
        console.log("Quantidade de itens: ")
        quantidade = leia.questionInt()
        calculo = quantidade * 18
        console.clear()
        console.log("\nProduto: X-Bacon" + "\n" +"\nValor total: R$" + calculo )
        break
//Saída--> Produto: X-Bacon ++ Valor total: quantidade + R$ 18.00
    case 4:
        console.log("Quantidade de itens: ")
        quantidade = leia.questionInt()
        calculo = quantidade * 12
        console.clear()
        console.log("\nProduto: Bauru" + "\n" +"\nValor total: R$" + calculo )
        break
//Saída--> Produto: Bauru ++ Valor total: quantidade + R$ 12.00 
    case 5:
        console.log("Quantidade de itens: ")
        quantidade = leia.questionInt()
        calculo = quantidade * 8
        console.clear()
        console.log("\nProduto: Refrigerante" + "\n" + "\nValor total: R$" + calculo )
        break
//Saída--> Produto: Refrigerante ++ Valor total: quantidade + R$ 8.00 
    case 6:
        console.log("Quantidade de itens: ")
        quantidade = leia.questionInt()
        calculo = quantidade * 13
        console.clear()
        console.log("\nProduto: Suco de laranja" + "\n" + "\nValor total: R$" + calculo )
        break
//Saída--> Produto: Suco de laranja ++ Valor total: quantidade + R$ 13.00 
    default:
        console.log("Opção inválida - Digite de 1 a 6!")
}
