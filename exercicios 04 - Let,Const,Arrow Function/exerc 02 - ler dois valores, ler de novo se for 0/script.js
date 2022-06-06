let num1 = parseInt = (prompt("Digite o Primeiro numero inteiro"));
let segura1;
let num2 = parseInt = (prompt("Digite o Segundo numero inteiro"));
let segura2;
let contador = 0;

    do{
        if(num1 >= 1 && num2 >=1){
            segura1 = num1;
            segura2 = num2
            contador++;

                }else if(num1 < 1){
                    num1 = prompt("Digite um numero valido!!");
                        contador-contador;

                            }else if(num2 < 1){
                                contador-contador;
                                num2 = prompt("Digite um numero valido!!");
                        }else{
                            console.log("ERRO");
                        }
    }while(contador != 2);

const resultado = (segura1/segura2);
                        //CHAMADA 
console.log(`O Numero informado do priimeiro numero foi: ${segura1}
e o Segundo numero informado foi: ${segura2}
A divisão do ${num1} por ${num2} é: ${resultado}!`);
