let numeros = new Array();

for (let c = 0; c < 3; c++) {
    numeros = parseInt(prompt("Digite 3 numeros."));
}

const contandoMaior = (num) =>{
    let maior =0;
    for (let i = 0; i < num.length; i++) {
        if(numeros[i] > maior)
        maior = numeros[i];
    }
    return maior;
}
   


console.log(contandoMaior(contandoMaior(numeros)));
    

