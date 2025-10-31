const leia = require('readline-sync')

let alimentacao
let animal

let tipo = leia.question("Vertebrado ou Invertebrado? ")
if (tipo == "vertebrado") {
    console.log("Ave ou Mamífero? ")
    classe = leia.question()

      if (classe == "ave") {        
    console.log("Carnívoro ou Onívoro? ")
    alimentacao = leia.question()

      if (alimentacao == "carnivoro") {
      animal = "Águia"
    }
        else if (alimentacao == "onivoro") {
      animal = "Pomba"
    }
} else if (classe == "mamifero") {
    console.log("Onívoro ou Herbivoro? ")
    alimentacao = leia.question()

      if (alimentacao == "onivoro") {
                  animal = "Homem"
      } else if (alimentacao == "herbivoro") {
      animal = "Vaca"
      }
}
}
else if (tipo == "invertebrado") {
    console.log("Inseto ou Anelídeo? ")
      classe = leia.question()

  if (classe == "inseto") {
    console.log("Hematofago ou Herbivoro? ")
    alimentacao = leia.question()

    if (alimentacao == "hematofago") {
      animal = "Pulga"
    } 
    else if (alimentacao == "herbivoro") {
      animal = "Lagarta"
    }
  }

else if (classe == "anelideo") {
    console.log("Hematófago ou Onívoro? ")
      alimentacao = leia.question()

    if (alimentacao == "hematofago") {
      animal = "Sanguessuga"
    }
    else if (alimentacao == "onivoro") {
      animal = "Minhoca"
    }
  }
}
console.log("O animal é: " + animal)