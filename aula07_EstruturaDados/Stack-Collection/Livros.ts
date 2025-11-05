import { Stack } from "./Stack"
import leia = require("readline-sync")

const pilha = new Stack<string>()

let opcao: number
let cliente: string

do {
    console.log("***********************  Menu   ***************************")
    console.log("1 - Adicionar Livro na pilha")
    console.log("2 - Listar todos os Livros")
    console.log("3 - Retirar Livro na fila")
    console.log("0 - Sair")
    console.log("\n*******************************************************")
    console.log("\nEntre com a opção desejada:")
    opcao = leia.questionInt()


    switch (opcao) {
    case 1:
        console.clear()
        cliente = leia.question("Informe o nome do livro: ")
        pilha.push(cliente)
        console.log("\nLivro adicionado!")
        break
    case 2:
        console.clear()
        console.log("Lista de livros na pilha: ", "\n")
        pilha.printStack()
        break
    case 3:
        console.clear()
        pilha.pop()
        pilha.printStack()
        console.log("\nUm Livro foi retirado da pilha!")

        break
    case 0:
        console.clear()
        console.log("\nPrograma Finalizado!")
        break
    default:
        console.clear()
        console.log("\nOpção inválida!")
        break
    }
    leia.question("\n**Aperte Enter para continuar**")
    console.clear()
} while(opcao != 0)