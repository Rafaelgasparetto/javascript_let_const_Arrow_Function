let n = parseInt(prompt("Digite um numero para saber os numeros primos desse numero:"));

        // VERIFICANDO SE OS NUMEROS SÃO PRIMOS OU NÃO 
const eprimo = (num) => {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          msg = "NÃO Primo";
          return false;    
        };
            msg = "Primo";
                return num >= 1;
  }
        // COLOCANDO NUMEROS PRIMOS NO VETOR
const numerosPrimos = (num) => {
    let numbers = new Array();
    for (var i = 0; i <= num; i++) {
      if (eprimo(i)){
        numbers.push(i);
        }   
    }
        return numbers;
  }
        // FAZENDO A CHAMADA COM INTERPOLAÇÃO  
  console.log(`Os numeros primos de ${n} é: ${numerosPrimos(n)}
  o numero ${n} é um numero ${msg}.`);






/*let num1 = parseInt (prompt("digite um numero inteiro"));


const ePrimo = (num1) => {
    for (let i = 2; i < num1; i++)
      if (num1 % i === 0) {
        return false;
      }
    return num1 > 1;
  };

console.log(ePrimo(num1));

const mostrarPrimo = (num1) =>{
    let primo = 0;


    for (let a = 0; a < num1 ; a++) {
          
    }





    return primo;
}
*/




/*const ePrimo = (num1) => {
    for (let i = 2; i < num1; i++)
      if (num1 % i === 0) {
        return false;
      }
    return num1 > 1;
  };

console.log(ePrimo(num1));
*/


/*function inteiroPositivo(num1) {
    


    return num1;
}


console.log(inteiroPositivo(num1));

*/