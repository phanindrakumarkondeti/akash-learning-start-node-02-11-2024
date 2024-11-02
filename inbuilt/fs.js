let fs = require('fs');

// writing some text in file
// fs.writeFile('text.txt','hello world', (err) => {
//     if(err) throw err;
//     console.log('Task finished  successfully');
// });

// writing some text in file with old data 
// fs.appendFile('text.txt',' coming form append package now \n', (err) => {
//     if (err) throw err;
//     console.log('text append from append package finished successfully');
// })

//read text in file text.txt
// fs.readFile('text.txt','utf8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

//read json file using readFile method
// fs.readFile('city.json','utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// })

//readFileSync method
// let data = fs.readFileSync('city.json',{encoding:'utf-8',flag:"r"});
// console.log(data);
// let data1 = fs.readFileSync('text.txt',{encoding:'utf-8',flag:"r"});
// console.log(data1);

//unlink method with callback function it shows working but is not working no use this
// incase you may give correct file it may be delete 
// fs.unlink('test.txt', () => {
//     console.log('unlink test.txt deleted successfully');
// })

//rename also same
// fs.rename('test.txt', () => {
//     console.log('unlink test.txt deleted successfully');
// })