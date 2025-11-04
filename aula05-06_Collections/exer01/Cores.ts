import leia = require('readline-sync')
const cores = Array(5)

console.log("\nInforme 5 cores:")
for (let i = 0; i < cores.length; i++) {
    cores[i] = leia.question(`${i + 1}: `)
}

console.log("\nCores informadas:")

for (const cor of cores) {
    console.log(cor)
}
cores.sort()  // Ordena as cores

console.log("\nOrdenar as cores:")
for (const cor of cores) {
    console.log(cor)  
}
