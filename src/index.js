export function wordCount(text) {

    const paragraph = extractParagraph(text);
    const count = paragraph.flatMap((paragraph) => {
        if (!paragraph) return [];
        return countDuplicateWord(paragraph);
    })
    return count;
}

const extractParagraph = (text) => {
    return text.toLowerCase().split('\n');
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