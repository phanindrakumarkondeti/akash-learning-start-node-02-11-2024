let fs = require('fs');
fs.writeFile('text.txt','hello world', (err) => {
    if(err) throw err;
    console.log('Task finished  successfullys');
});