/**
 * Autora: Beatriz Braga Silva
 * Data: 05/03
 */

//importacaoes
import readlinesync = require("readline-sync");

//variaveis e constantes
const alunos = new Set<string>();
let continuar: boolean = false;
let opcao: number = 0;

//menu
do{
    console.log("1. Adicionar aluno");
    console.log("2. Listar alunos");
    console.log("3. Remover aluno");
    console.log("4. Limpar lista de alunos");

    opcao = readlinesync.questionInt("Escolha uma opcao: ");

    switch(opcao){
        case 1:
            alunos.add(readlinesync.question("Digite o nome do aluno: "));
            break;
        case 2:
            console.table(alunos);
            break;
        case 3:
            let nomeAluno = (readlinesync.question("Digite o nome do aluno: ").toLowerCase());
            for(let nome of alunos){
                if(nome == nomeAluno){
                    alunos.delete(nome);
                    console.log("Aluno removido!");
                }else{
                    console.log("Aluno nao encontrado");
                }
            }
            break;
        case 4:
            alunos.clear();
            break;
        default:
            console.log("Opcao invalida!");
            break;
    }

    continuar = readlinesync.keyInYNStrict("Deseja continuar? ");

}while(continuar);