

let http = require('http');
let server = http.createServer((req, res) => {
    res.write('this is coming form http://localhost : 7000');
    res.end()
});
server.listen(7000);