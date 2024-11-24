import fs from 'fs';
import functionsError from './error/functionsError.js';
import { wordCount } from './index.js';
import { makeFileExit } from './helpers.js';
const filePath = process.argv;
const link = filePath[2];
const address = filePath[3];

fs.readFile(link, 'utf8', (error, fileText) => {
    try {   
        if (error) throw error
    const result = wordCount(fileText);
    createSaveFile(result, address);

    } catch (error) {
        functionsError(error);
    }

});

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
