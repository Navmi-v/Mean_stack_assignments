 
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + "'./samples'");
    process.exit(-1);
}
 
var path = process.argv[2];
 
fs.readdir(path, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});

