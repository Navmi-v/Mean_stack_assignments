var express = require('express');
var routes = require('./api.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// set up express app
var app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/invent');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routes);

//error handling
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
})


// listen for request
app.listen(8080, function(){
    console.log('listening for requests');
});