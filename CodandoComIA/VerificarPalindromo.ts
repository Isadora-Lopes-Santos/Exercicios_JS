// Ajuda da IA:
function VerificarPalindromo(value: string): boolean {
  const str = String(value).toLowerCase()// Transforma em  minusculo para o terminal ler
  const reversed = str.split("").reverse().join("")
  return str === reversed
}
// split => Separa a string em um array de letras.
// reverse => Inverte a ordem dos elementos. 
// join => Junta tudo de volta numa string.

const entradas = ["\nBanana", "Arara", "Radar", "Sapato", "Reviver"]

entradas.forEach(item => {
  if (VerificarPalindromo(item)) {
    console.log(`${item} → É um palíndromo`)
  } else {
    console.log(`${item} → Não é um palíndromo`)
  }
})
