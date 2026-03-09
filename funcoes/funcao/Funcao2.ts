/**
 * Autora: Beatriz Braga Silva
 * Data: 09/03
 */

//variaveis e constantes

tipoProduto("oi")

function tipoProduto(tamanho: number | string) : void {
    if(typeof tamanho == 'number'){
        console.log("O tamanho eh um numero!\n");
    }else{
        console.log("O tamanho eh uma string!\n");
    }
}