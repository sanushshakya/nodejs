const fs = require('fs');
const path = require('path')
// fs.readFile('text.json', 'utf-8', (err, jsonString) => {
//     if(err){
//         console.log(err);
//     } else {
//         const data = JSON.parse(jsonString);
//         console.log(data);
//     }
// })
const path1 = path.join(__dirname, 'data.json')

console.log(path1)