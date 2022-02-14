const fs = require('fs');
const readline = require('readline-sync');

const data = JSON.parse(fs.readFileSync('apple.json', 'utf-8'));
let name = readline.question("Author's Name");

for(let i=0; i<=19; i++){
    if(data.articles[i].author.match(name)){
        // console.log(data.articles[i].author);
        // console.log(data.articles[i].title);
        console.log(data.articles[i].publishedAt);
    }
}



// const d = data.articles.filter((dh)=>dh.author.match(name));
// console.log(d)
