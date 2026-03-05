/**
 * Autora: Beatriz Braga Silva
 * Data: 05/03
 */

//importacaoes
import readlinesync = require("readline-sync");

//variaveis e constantes

//const alunos: string[] = []; //array de strings iniciado vazio
//const alunos: string[] = ["Capivara", "do Ti"]; //array de strings iniciado com 2 nomes
const alunos: Array<number>=[12,14]; //mesma coisa que as duas cima, mas escrita de forma diferente.
const notas= new Array<number>(5);

for (let i = 0; i < notas.length; i++) {
    notas[i] = readlinesync.questionFloat("Digite a nota: ");
}

console.table(notas);