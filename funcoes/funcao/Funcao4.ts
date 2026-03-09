/**
 * Autora: Beatriz Braga Silva
 * Data: 09/03
 */

//teste
console.log("\nTESTANDO SOMAR")
console.log(somar(8,5,2));

//funcao dividir
function somar(numero1:number, numero2:number, numero3?: number) : number{
    if(numero3 != undefined){
        return numero1+numero2+numero3;
    } else {
        return numero1+numero2;
    }
}