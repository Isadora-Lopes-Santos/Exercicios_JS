const leia = require("readline-sync")

/*  leia o Salário Bruto, o Adicional Noturno, 
as Horas Extras e os Descontos de um Colaborador, 
exiba na tela o Salário Líquido.*/ 

let SalarioBruto, AdicionalNoturno
let HorasExtras, Descontos
let SalarioLiquido

console.log("Digite o salário bruto: ")
SalarioBruto = leia.questionFloat()


console.log("Digite o adicional noturno: ")
AdicionalNoturno = leia.questionFloat()

console.log("Digite as Horas Extras: ")
HorasExtras = leia.questionFloat()

console.log("Digite os descontos aplicados: ")
Descontos = leia.questionFloat()


SalarioLiquido = SalarioBruto + AdicionalNoturno + (HorasExtras * 5) - Descontos



console.log("\nO salário líquido será: ", SalarioLiquido)