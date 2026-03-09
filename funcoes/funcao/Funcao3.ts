/**
 * Autora: Beatriz Braga Silva
 * Data: 09/03
 */

//teste
console.log("\nTESTANDO DIVIDIR")
console.log(divisao(10,0));

//funcao dividir
function divisao(numero1:number, numero2:number) : number | null {
    return ((numero1/numero2) != Infinity ? (numero1/numero2) : null);
}