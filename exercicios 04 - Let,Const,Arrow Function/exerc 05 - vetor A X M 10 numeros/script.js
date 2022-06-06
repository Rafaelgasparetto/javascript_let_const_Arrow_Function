let vetorA = new Array();
let vetorM = new Array();
let x;


for (let i = 0; i < 11; i++) {
    
    vetorA[i] = Number(prompt("Digite um numero"));
    vetorM[i] = vetorA[i];
}
x = vetorM[10];
vetorA.pop();

for (let y = 0; y < vetorA.length; y++)
    vetorM[y] = (vetorA[y]*x);


        for (let resul = 0; resul < vetorA.length; resul++) 
        console.log(`valores do vetor A: ${vetorA[resul]} X ${x} é igual a ${vetorM[resul]}`);

