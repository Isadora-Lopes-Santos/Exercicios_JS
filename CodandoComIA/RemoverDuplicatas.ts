// Ajuda da IA:

//Usando SET:
/*const notas: number[] = [7.0, 5.0, 4.0, 10.0, 6.0];
const frutas: string[] = ["Banana", "Banana", "Maçã", "Morango", "Laranja"];

const notasSemDuplicatas = [...new Set(notas)];
const frutasSemDuplicatas = [...new Set(frutas)];

console.log(notasSemDuplicatas);
console.log(frutasSemDuplicatas);
*/

//Sem SET:
const notas: Array<number> = new Array <number>(1, 2, 3, 4, 5, 1)
const frutas: Array<string> = new Array <string>("Banana", "Banana", "Maçã", "Morango", "Laranja")

const notasSemDuplicatas = notas.filter((item, index) => {
    return notas.indexOf(item) === index
})

const frutasSemDuplicatas = frutas.filter((item, index) => {
    return frutas.indexOf(item) === index
})
// filter -> percorre o array item por item e mantém somente aqueles que retornam TRUE na função.
//indexOf(item) -> retorna a primeira posição (índice) onde aquele valor aparece no array.

console.log(notasSemDuplicatas)
console.log(frutasSemDuplicatas)