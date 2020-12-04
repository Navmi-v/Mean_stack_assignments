var http = require('http');
var fs = require('fs');


var myRead = fs.createReadStream(__dirname + '/test.txt', 'utf8'); 
//read stream
myRead.on('data', function(chunk){
    console.log('new chunk received'); 
    console.log(chunk); 
})