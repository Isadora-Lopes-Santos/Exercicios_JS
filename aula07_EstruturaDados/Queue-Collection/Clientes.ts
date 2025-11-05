import { Queue } from "./Queue"
import leia = require("readline-sync")

const fila = new Queue<string>()

let opcao: number
let cliente: string

do {
    console.log("***********************  Menu   ***************************")
    console.log("1 - Adicionar Cliente na fila")
    console.log("2 - Listar todos os Cliente")
    console.log("3 - Retirar Cliente na fila")
    console.log("0 - Sair")
    console.log("\n*******************************************************")
    console.log("\nEntre com a opção desejada:")
    opcao = leia.questionInt()

    switch (opcao) {
    case 1:
        console.clear()
        cliente = leia.question("Informe o nome do cliente: ")
        fila.enqueue(cliente)
        console.log("\nCliente adicionado!")
        break
    case 2:
        console.clear()
        console.log("Lista de Clientes na Fila:")
        fila.printQueue()
        break
    case 3:
        console.clear()
        fila.dequeue()
        fila.printQueue()
        console.log("O Cliente foi Chamado!")
        break
    case 0:
        console.log("\nPrograma Finalizado!")
        break
    default:
        console.log("Opção inválida!")
        break
    }
    leia.question("\n**Aperte Enter para continuar.**")
    console.clear()
} while(opcao != 0)
