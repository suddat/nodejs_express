const express = require('express');
const path = require('path');
const app = express();
const people = require('./routes/people');

//app.use('/public', express.static(path.join(__dirname, 'static')));
//app.use('view engine', 'ejs');
app.use('/people', people);

/* app.get('/', (req, res)=>{

}); */

app.listen('3001');