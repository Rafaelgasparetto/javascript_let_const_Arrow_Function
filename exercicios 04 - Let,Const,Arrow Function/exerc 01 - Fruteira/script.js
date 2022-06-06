let k_maca = parseFloat(prompt("Digite quantos kilos de Maça desejada."));
let preco_maca;   
let k_morango = parseFloat (prompt("Digite a quantos kilos de Morango desejada"));
let preco_morango;
let desconto = 0.10;


    if(k_maca >= 5){
        preco_maca = 1.50;
        preco_maca = preco_maca * k_maca;
    }else{
        preco_maca = 1.80;
        preco_maca = preco_maca * k_maca;
    }
        if(k_morango >= 5){
            preco_morango = 2.20;
            preco_morango = preco_morango * k_morango;
        }else{ 
            preco_morango = 2.50;
            preco_morango = preco_morango* k_morango;
        }

let kiloFrutas = k_maca + k_morango;
let precoTotal = preco_maca + preco_morango;

            if(kiloFrutas >= 8 || precoTotal >= 25.00){
                precoTotal = precoTotal*desconto;
                precoTotal = precoTotal*0.90;
            }else{
                desconto = ("Não foi aplicado nenhum tipo de desconto: "+desconto) ;
                precoTotal = (preco_maca+preco_morango);
            }

console.log(`kilos de Frutas: ${k_maca} kilos de Maça
${k_morango} kilos de Morango
Preço total da Maça: ${preco_maca} 
Preço total do Morango: ${preco_morango})
Desconto de: ${desconto}
Preço total: ${precoTotal}`);








/*
let fruta_maca ={
    k_maca: k_maca,
    preco_maca: preco_maca,
    
}
*/
/*
let fruta_morango ={
    k_morango: k_morango,
    preco_morango: preco_morango,

}
*/























/*let precoMaca = 1.80;
let precoMorango = 2.50;
const kiloMaca = parseFloat(prompt=("Digite quantos kilos de maca?"));
const kiloMorango = parseFloat(prompt=("Digite quantos kilos de Morango?"));
let  = parseFloat (precoTotal);
let desconto;
let kiloFrutas = (kiloMaca + kiloMorango);
let precoTotal = (precoMorango + precoMaca);

if(kiloMorango > 5 ){
    precoMorango = 2.20;
    
}else if(kiloMaca > 5){
    precoMaca = 1.50;
}



if(kiloFrutas > 8 || precoTotal > 25.00){
    desconto = precoTotal*0.10;
    precoTotal = precoTotal*0.95;
}else{
        precoTotal = precoTotal;
    }

*/