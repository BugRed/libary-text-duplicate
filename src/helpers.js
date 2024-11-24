function occurrenceFilter(paragraph){
    return Object.keys(paragraph).filter(key => paragraph[key] > 1 || paragraph[key] !== undefined ||paragraph[key] != undefined || paragraph[key] !== null || paragraph[key] !== ''|| paragraph[key] !== ' ' || paragraph[key] !== 0)
}

function makeFileExit(wordList){
    let finalText = '';
    wordList.forEach((paragraph, index) => {
        const duplicate = occurrenceFilter(paragraph).join(', ');
        finalText += `palavras duplicadas no parágrafo ${index+1}: ${duplicate} \n`;
    });

    return finalText;
}

export { makeFileExit };