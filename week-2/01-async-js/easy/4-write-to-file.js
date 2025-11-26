const fs = require('fs');

fs.writeFile('new.txt', 'Hello from new.txt again', (err) => {
    if (err) {
        console.log('Error within the file : ', err);
    }
    else {
        console.log('File created successfully!')
    }
})