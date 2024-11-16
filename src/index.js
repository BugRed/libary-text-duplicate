const fs = require('fs');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'utf8', (err, fileText) => {
    breakParagraphCount(fileText)
});


const breakParagraphCount = (text) => {
    const paragraph = text.toLowerCase().split('\n');
    const count = paragraph.flatMap((paragraph)=> {
        if(!paragraph) return [];
        return countDuplicateWord(paragraph);
    })
    console.log(count);
    
}

const cleanCharacter = (word) => {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\r]/g, '');
}

const countDuplicateWord = (text) => {
    const wordList = text.split(' ');
    const result = {};

    wordList.forEach(word => {

        if (word.length >= 3) {
            const cleanWord = cleanCharacter(word);
            result[cleanWord] = (result[cleanWord] || 0) + 1;
        }

    });
    return result;
}