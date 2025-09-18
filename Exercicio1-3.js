// Complete a função que verifica se um número é par ou ímpar
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log(verificarParImpar(8)); 
console.log(verificarParImpar(7));  