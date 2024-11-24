import fs from 'fs';
import path from 'path';
import functionsError from './error/functionsError.js';
import { wordCount } from './index.js';
import { makeFileExit } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();


program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminh do texto a ser processado')
    .option('-d, --destino <string', 'caminho da pasta onde salvar o arquivo de resultado')
    .action((options)=>{
        const { texto, destino } = options;
        if(!texto || !destino) {
            console.error(chalk.red('erro: favor inserir caminho de origem e destino'))
            program.help();
            return;
        }

        const textoPath = path.resolve(texto);
        const destinoPath = path.resolve(destino);

        try {
            processFile(textoPath, destinoPath);
            console.log(chalk.green('Texto processado'))
        } catch (error) {
            console.log('Erro no processamento', erro)
        }
    })

program.parse();


function processFile (texto, destine){
    fs.readFile(texto, 'utf8', (error, fileText) => {
        try {   
            if (error) throw error
        const result = wordCount(fileText);
        createSaveFile(result, destine);
    
        } catch (error) {
            functionsError(error);
        }
    
    });

}


async function createSaveFile(wordList, address){
    const newFile = `${address}/resourceLimits.txt`
    const textWord = makeFileExit(wordList);
    try {
        await fs.promises.writeFile(newFile, textWord);
        console.log('Arquivo criado!');

    } catch (error) {   
        throw error;
    }
}



// function createSaveFile(wordList, address){
//     const newFile = `${address}/resourceLimits.txt`
//     const textWord = JSON.stringify(wordList)


//     fs.promises.writeFile(newFile, textWord)
//     .then(()=> console.log('Arquivo criado!'))
//     .catch((error) => {throw error})
//     .finally(()=> console.log('Operação finalizada!'));
// }
