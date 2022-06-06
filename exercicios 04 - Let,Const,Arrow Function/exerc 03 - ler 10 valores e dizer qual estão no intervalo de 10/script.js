let valores = new Array();
let cacth = new Array();
let fora = new Array();

    for (let i = 0; i < 10; i++) {   
    valores[i] = parseInt(prompt("Digite um numero"));
    
            if (valores[i] < 9){
            fora[i] = valores[i]; 

                }else if(valores[i] > 21)
                        fora[i] = valores[i]


                            if(valores[i] >= 10 && valores[i] <= 20)
                                cacth[i] = valores[i];
                            
    }
            // FILTROS DOS ARRAYS
        let cacthComFiltro = cacth.filter(function(a){
            return a;
        });

    let foraintervalo = fora.filter(function(b){
        return b;
    });

            //CHAMADA COM INTERPOLAÇÃO
console.log(`Valores digitado: ${valores}
Valores no intervalo de 10 a 20: ${cacthComFiltro}
Valores fora do intervalo de 10 e 20: ${fora}`);

