const fs = require('fs');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'utf8', (err, text) =>{
    console.log(text);
});