var events = require(`events`); 
var fs = require('fs');
// element.on('click', function(){}) 
//custom events 

var myEmitter = new events.EventEmitter(); 
myEmitter.on('someEvent', function(mssg){ 
      fs.writeFile('./raw.txt', mssg);
}); 

myEmitter.emit('someEvent', `Hey Ho! Let's go`) 
