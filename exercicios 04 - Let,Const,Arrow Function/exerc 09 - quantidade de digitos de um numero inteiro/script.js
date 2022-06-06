//ENTRADA COM VALOR
numero=[] = String(prompt("digite um numero inteiro"));
// FUNCTION PARA CONTAR DIGITOS COM ARROW FUNCTION
const contar = () => {let contarString = numero; return contarString.length;}
//CHAMADA CONSOLE COM INTERPOLAÇÃO
console.log(`O numero digitado foi: ${numero} e a quantidade de digitos são: ${contar()}`);
