const fs = require('fs');

fs.readFile('read.txt', 'utf-8', (err, data) => {
    
    let arrayData = data.split(/\s+/);
    let res = arrayData.join(" ");

    fs.writeFile("read.txt", res, (err) => {
      if (err) {
        console.log("Error while writing : ", err);
      } else {
        console.log("Successfully written to the file");
      }
    });
})