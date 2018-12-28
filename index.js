/* const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello Express");
}).listen('3000');
app.get('/example', (req, res)=>{
    res.send("example Route");
});

app.get('/example/:name/:age', (req, res)=>{
    console.log(req.params);
    res.send(req.params.name+":"+req.params.age);
}); */

/* const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const app           = express();
const Joi           = require('joi');

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.get('/:userQuery', (req, res)=>{
    //res.sendFile(path.join(__dirname, 'static', 'index.html')); //render static files use this
    res.render('index',{data:{userQuery:req.params.userQuery,
                            searchResults:['suddat1', 'vivek', 'apoorv', 'rizwan'],
                            LoggedIn: true
                                }});
    //console.log(app);
});

app.post('/', (req, res)=> {
    console.log(req.body);
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        pass : Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body, schema, (err, result)=>{
        if(err){
            console.log("error occures");
            res.send("Error occured !!");
        }
        console.log(result);
        res.send("Successfully posted");
    });
    //database work
    //res.send("Record Posted Successfully");
    //res.json({success: true, body_req:req.body});
});

app.listen('3000'); */

//if complicated object then break it down to its individual schema. check below example
/* const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];

const arrayObject = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];

const userInput = {
    personalInfo:{
        streetAddress : '12234556677',
        city:'fkgnkhn',
        state:'fl'
    },
    preferences: arrayObject
};

const personalInfoSchema = Joi.object().keys({
    streetAddress:Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state:Joi.string().trim().length(2).required(),
});

//below is an example of array with strings as values.
//const preferencesSchema = Joi.array().items(Joi.string());

//below shows how to make schema for array with objects

const preferencesSchema = Joi.array().items(Joi.object().keys({
    example: Joi.string().trim().required()
}));

const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
});

Joi.validate(userInput, schema, (err, result)=>{
    if(err)
        console.log(err);
    else
        console.log("result---->",result);
});
 */


//explaining middleware

const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const app           = express();

//middleware gets called on each https request-response cycle
app.use(bodyParser.json());
app.use((req, res, next)=>{ //user defined middleware
    console.log(req.url, req.method); //if next() is not called, it will stuck as transfer of 
                                    //control/flow is not yet passed
    req.banana = "banana";
    next();
});

app.get('/', (req,res)=>{ //middleware provided by express for get request
    console.log(req.banana);
    res.send('Middleware');
});
app.listen('3000');