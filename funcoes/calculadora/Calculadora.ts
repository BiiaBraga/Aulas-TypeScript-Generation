/**
 * Autora: Beatriz Braga Silva
 * Data: 09/03
 */

//importacaoes
import readlinesync = require("readline-sync");
import { divisao, soma, subtracao, multiplicacao } from "./operacoes/calculos";

//variaveis e constantes
let resultadoDivisao: number | null;
let numero1: number;
let numero2: number;

//entrada
numero1 = readlinesync.questionFloat("Digite o primeiro numero: ");
numero2 = readlinesync.questionFloat("Digite o segundo numero: ");

//soma
console.log("O resultado da soma eh: " + soma(numero1,numero2));

//subtracao
console.log("O resultado da subtracao eh: " + subtracao(numero1,numero2));

//multiplicaco
console.log("O resultado da multiplicacao eh: " + multiplicacao(numero1,numero2));

//divisao
resultadoDivisao = divisao(numero1,numero2);
if(resultadoDivisao == null){
    console.log("Nao existe divisao por 0");
} else {
    console.log("O resultado da divisao eh: " + resultadoDivisao);
}
