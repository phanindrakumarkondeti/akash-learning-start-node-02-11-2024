const express = require('express');
const app = express();
let fs = require('fs');
const dotenv = require('dotenv');
dotenv.config()
let morgan = require('morgan');

const port = process.env.PORT || 6700; // Use an environment variable if available
let categoryRouter = require('./src/controller/CategoryRouter');
let productRouter = require('./src/controller/ProductRouter');

//let port = 6700;
app.use(morgan('common',{stream:fs.createWriteStream("./app.log")}));
//app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname+'/public'));
app.set('views','./src/views');
app.set('view engine', 'ejs');
//default
app.get('/', (req, res) => {
   // res.send('Welcome to the express server')
   res.render('index',{title: 'Welcome to the express server'});
});





app.use('/categeory', categoryRouter);
app.use('/products', categoryRouter);

app.listen(port, (err) => {
    if (err) throw err;
    else {
        console.log('The server is listening on port ' + port);
    }
});