let valores = [3];
let valorMaior;
let valorMenor;

for (let i = 0; i < 3; i++)
    valores[i] = parseInt (prompt("Digite um numero"));

const valMaior = (valores) => {
    let maior = 0;
    for (var a = 0; a < valores.length; a++) {
        if (valores[a] > maior){
           maior = valores[a];
        }
     }
     return maior;
}

const valMenor = (valores) => {
    let menor = 0;
    for (var b = 0; b < valores.length; b++) {
        if (valores[b] < menor){
           menor = valores[b];
        }
     }
     return menor;  
}

console.log(`Os valores digitados foram: ${valores}
O maior valor digitado é: ${valorMaior(valores)}
e o menor valor digitado é: ${valorMenor(valores)}`)


    
// `o Valor Maior é: ${valorMaior}`;







    /*if(valores[i] < valores){
        valorMenor = valores[i];
        console.log("achei");
    }else if( valores[i] > valores){
        valorMaior = valores[i];
        console.log("achei2");
    }


  valorMaior = Math.max(valores);
    //valorMenor = Math.min(valores[i]); 


*/