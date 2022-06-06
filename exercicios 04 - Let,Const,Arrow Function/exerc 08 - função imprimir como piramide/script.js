let n = new Array();

n = parseInt(prompt("Digite um numero"));

const imprima = (numero) => {

    let contador = 0 ;

    for (let i = 1; i < numero; i++) {
    console.log(i+" 1for");
    
    for (let a = 2; a < contador; a++) {
    console.log(i+" 2for");
    contador++;
    }
}

    return numero;
}

console.log(imprima(n));







//primeira tentativa \/

    /*for (let i = 1; i < numero; i++) {
        //console.log(i);
        //console.log(numero);
        //debugger;
        for (let a = 2; a < numero; a++) {
            console.log(i);
            console.log(a);
            //console.log(numero);
        
        }
    }*/

        //segunda tentativa

        /*switch (numero) {
        case numero = numero:
            console.log(i+" "+i);
            //contador = i+contador;
            //console.log(contador);          
            break;
    
        default:
            console.log(i+"caindo fora");
            break;
    }*/ 