var express = require('express');
//fires the express function
var app = express();
//no need to type contant-type, express figures that out
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//middleware
//add css
// app.use("/", function(req, res, next){
//     console.log(req.url);
//     next();
// });
app.use('/abc', express.static('abc'));
//app.get('route', function())
app.get('/', function(req, res){
    res.sendFile(__dirname+ '/index.html')
});
app.get('/contact', function(req, res){
    res.send("This is the contact page")
});
// action= method=post
app.post('/contact',urlencodedParser, function(req, res){
    console.log(req.bdy);
    res.send("This is the contact page")
});
//easy dynamic routes
app.get('/profile/:id', function(res, res){
    res.send('You requested to seea profile with the id of'+ req.params.id );
});

app.get('/profile/:name', function(res, res){
   // res.send('You requested to seea profile with the name of'+ req.params.name );
   var data = {age: 29, job: 'ninja'};
   res.render('profile', {person: req.params.name, data: data});
   // first argument is the name of the ejs file
   // 2nd paramter is the object used for dynamic usage
});
 app.listen(3000);