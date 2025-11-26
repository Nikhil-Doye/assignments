const fs = require('fs');
let total = 0;

fs.readFile('a.txt', 'utf-8', (err, data) => {
    console.log(data);
})

for(let i=0; i<10000000000; i++){
    total += 1;
}
console.log(total);