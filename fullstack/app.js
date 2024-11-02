const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 6700; // Use an environment variable if available
//let port = 6700;

//default
app.get('/', (req, res) => {
    res.send('Welcome to the express server')
});
app.get('/test', (req, res) => {
    res.send('Welcome to the express test server')
});


app.listen(port, (err) => {
    if (err) throw err;
    else {
        console.log('The server is listening on port ' + port);
    }
});