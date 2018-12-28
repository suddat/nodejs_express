/* 
middleware creates an object of what is used in .use()
below example shows that, whenever a request-response-cycle is triggered, it will execute the .use()
and .route()
*/

const express = require('express');
const app = express();

LOGGED = (req, res, next)=>{
    console.log("Logged");
    next();
}

app.use(LOGGED);

app.get('/', (req,res, next)=>{
    res.send("Hello World!!!!");
});
app.listen('3000');