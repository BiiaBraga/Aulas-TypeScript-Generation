/**
 * Autora: Beatriz Braga Silva
 * Data: 05/03
 */

//importacaoes
import readlinesync = require("readline-sync");

//variaveis e constantes
const notas: Array<number> = [5,6,7,9,4,3,1];

//for q percorre o array conforme o tamanho da lista
for(let nota of notas){
    console.log(nota);
}

//inseri no final
notas.push(10);
console.log(notas);

//remove o ultimo
notas.pop();
console.log(notas);

//ordena
notas.sort();
console.log(notas);