var http = require('http');
//server creation
var server = http.createServer(function(req, res){
    console.log(`request was made ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is question number 1');
});
server.listen(3000, '127.0.0.1');
console.log(`Success, I'am listening from port: 3000`);
