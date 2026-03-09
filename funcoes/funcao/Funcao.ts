/**
 * Autora: Beatriz Braga Silva
 * Data: 09/03
 */

//variaveis e constantes
let resultado: number = 0;
let juros : number;

console.log("TESTANDO SOMAR")
console.log(somar(8,5));
resultado = somar(8,5);
juros = resultado * 0.1;
console.log(juros)

console.log("\nTESTANDO DIVIDIR")
console.log(dividir(10,2));

//função somar
function somar(numero1: number, numero2:number) : number{
    return numero1+numero2;
}

//função  dividir
function dividir(numero1: number, numero2:number): void {
    console.log(numero1/numero2);
}