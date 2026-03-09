/**
 * Autora: Beatriz Braga Silva
 * Data: 09/03
 */


//---- FUNÇÕES ----//

//funcao somar
export function soma(numero1: number, numero2:number) : number{
    return numero1+numero2;
}

//funcao subtracao
export function subtracao(numero1: number, numero2:number) : number{
    return numero1-numero2;
}

//funcao multiplicacao
export function multiplicacao(numero1: number, numero2:number) : number{
    return numero1*numero2;
}

//funcao divisao
export function divisao(numero1:number, numero2:number) : number | null {
    return ((numero1/numero2) != Infinity ? (numero1/numero2) : null);
}

//funCAO turma14
export function turma14() : void {
    console.log("Calculo desenvolvida pela turma 14!");
}