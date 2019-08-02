let express = require('express');
//let nodemon = require('nodemon');
let mongoose = require('mongoose');
let apiroutes = require('./api-routes');
let bodyParser=require('body-parser')
let app = express();
let router = require('express').Router();
app.get('/',(req,res)=>{
    res.send(JSON.stringify({message:'Hello world from express'}))
});

//===========================
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);
//-==============================

app.use(bodyParser.json());
app.use('/api',apiroutes);
let port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log('Server started');
})

//configure bodyparser to handle post requests

app.use(bodyParser.urlencoded({
    extended:true
}));



mongoose.connect('mongodb://localhost/moviesdb',{useNewUrlParser:true});

var db=mongoose.connection;

//added check for db connection

if(!db){
    console.log("error connecting db");
}
else{
    console.log("db successs")
}

